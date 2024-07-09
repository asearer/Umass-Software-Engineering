import unittest
from app import app
from unittest.mock import patch

class ForexAppTestCase(unittest.TestCase):
    def setUp(self):
        # Create a test client
        self.app = app.test_client()
        # Propagate exceptions to the test client
        self.app.testing = True

    def test_index_page(self):
        # Test if the index page returns a 200 status code
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)

    def test_convert_valid_input(self):
        # Test a valid currency conversion
        response = self.app.post('/convert', data=dict(
            base_currency='USD',
            target_currency='EUR',
            amount='100'
        ), follow_redirects=True)

        # Check if the response contains the converted amount
        self.assertIn(b'Conversion Result', response.data)
        self.assertIn(b'Result:', response.data)


    @patch('requests.get')
    def test_convert_valid_input_with_mocked_api(self, mock_get):
        # Mock the external API response with valid data
        mock_response = {
            'status_code': 200,
            'json_data': {
                'rates': {
                    'EUR': 0.85
                }
            }
        }
        mock_get.return_value.status_code = mock_response['status_code']
        mock_get.return_value.json.return_value = mock_response['json_data']

        # Test a valid currency conversion with mocked API
        response = self.app.post('/convert', data=dict(
            base_currency='USD',
            target_currency='EUR',
            amount='100'
        ), follow_redirects=True)

        # Check if the response contains the converted amount
        self.assertIn(b'Conversion Result', response.data)
        self.assertIn(b'Result:', response.data)

if __name__ == '__main__':
    unittest.main()

