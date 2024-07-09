from flask import Flask, render_template, request
import requests
import logging
from flask_bootstrap import Bootstrap

app = Flask(__name__)
bootstrap = Bootstrap(app)

# Function to convert input to uppercase
def convert_to_uppercase(input_str):
    """
    Converts the input string to uppercase.

    Args:
        input_str (str): The input string to be converted.

    Returns:
        str: The input string converted to uppercase.
    """
    return input_str.upper()

@app.route('/')
def index():
    """
    Renders the index.html template for the home page.

    Returns:
        str: HTML content for the home page.
    """
    return render_template('index.html')

@app.route('/convert', methods=['POST'])
def convert():
    """
    Handles the currency conversion process.

    This route takes user input for base currency, target currency, and amount,
    and then uses an external API to perform the currency conversion.

    Returns:
        str: HTML content for the result page or error page.
    """
    # Get user input from the HTML form
    base_currency = convert_to_uppercase(request.form['base_currency'])
    target_currency = convert_to_uppercase(request.form['target_currency'])
    amount = float(request.form['amount'])

    # Make a request to the correct API endpoint
    api_url = 'https://api.exchangerate.host/latest'
    
    try:
        # Send a GET request to the API
        response = requests.get(api_url)

        if response.status_code == 200:
            # Parse the JSON response
            data = response.json()

            # Check if the target_currency exists in the rates data
            if target_currency in data['rates']:
                rate = data['rates'][target_currency]
                converted_amount = amount * rate
                return render_template('result.html', converted_amount=converted_amount)
            else:
                logging.error(f'Target currency {target_currency} not found in API response')
                return render_template('error.html')
        else:
            logging.error(f'API request failed with status code {response.status_code}')
            return render_template('error.html')
    except Exception as e:
        logging.error(f'An error occurred: {str(e)}')
        return render_template('error.html')

if __name__ == '__main__':
    app.run(debug=True)



