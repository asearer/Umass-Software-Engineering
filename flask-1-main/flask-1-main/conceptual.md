### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?

purpose/use, syntax, standard libraries, runtime envirinment, learning curve

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming
  crashing.

  using the get() method or a try-except block

- What is a unit test?

it tests a specific part or function

- What is an integration test?

it tests that the individual parts function together as expected

- What is the role of web application framework, like Flask?

to help simplify and streamline development of web applications.

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?

factors like data semantics, SEO, user-friendliness, flexibility, and security
being high priority would generally lend better to using route url whereas
query params allow for more flexibility, optional data, bookmarking  

- How do you collect data from a URL placeholder parameter using Flask?

using the route() decorator

- How do you collect data from the query string using Flask?

request.args.get() 

- How do you collect data from the body of the request using Flask?

request.form.get()

- What is a cookie and what kinds of things are they commonly used for?

a key/val pair that stores data between client and server that can be used
for things such as session management, user auth, security, analytics and
localization

- What is the session object in Flask?

built in tool that allows storage and persistence of user specific data
across mutiple http requests

- What does Flask's `jsonify()` do?

creates json responses in a flask app. it allows easy conversion of python
data structures into json format and returns them as a json response to the 
client