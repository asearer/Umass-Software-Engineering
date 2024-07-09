### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JWT stands for JSON Web Token. It is a token that is often issued to prove that a user has been authenticated.
  It is usually passed from request to request. Sometimes it is stored in the request body, sometimes it is stored in the header.

- What is the signature portion of the JWT?  What does it do?
  The signature is used to prove that the user is who they say they are and that they are allowed access to a resource.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes, they can.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  Create a "login" route and issue a JWT via jwt.sign(payload, SECRET_KEY).
  The payload can be something like {username: "user1"} or {username: "theAdmin", isAdmin: true}
  From there, you can create middleware that is used on routes that require authentication. This piece
  of middleware can be used to verify that the JWT is valid. This is better than repeating the same code
  multiple times. You can then create middleware that checks for the JWT and checks for the presence of the token and certain 
  other qualifications (is the user an admin? Is the user the same user as in request.params.username?)

- Compare and contrast unit, integration and end-to-end tests.
  Unit testing tests individual functions.
  Integration testing tests how function work in tandem.
  End-to-end tests are much larger in scope and tests aspects of the complete program.

- What is a mock? What are some things you would mock?
  A mock is a simulation of some scenario that is used in testing. You might mock a user's account.
  You could also mock calls to an API, or create a bunch of mock data to use in testing.

- What is continuous integration?
  Continuous integration is the process of of making smaller commits and bringing them to production more frequently,
  rather than making a large commit once a year, once every six months, etc. Programs such as Travis or Jeniins are often 
  used to to run your tests before pushing to production. If the tests pass, the code becomes deployed in production. If not,
  the build fails and alerts the team.

- What is an environment variable and what are they used for?
  Environment variables are things that are stored locally and should not end up in github. API keys, database connection strings,
  secret keys, passwords, etc., are examples of things that would be environment variables.

- What is TDD? What are some benefits and drawbacks?
  TDD is test driven development. Essentially, it means writing tests first. The tests will fail, and the engineer will write the code to make the tests pass, then refactor. A benefit to TDD is that you hopefully think of the edge cases prior to writing the code, and then write the code to 
  guard against them. You typically also have high test coverage when using TDD. A drawback is that it can be very time consuming and that the whole team has to do it if one person is doing it. 

- What is the value of using JSONSchema for validation?
  JSONSchema is great at validating that the json you get in your request body. You can tell the JSON schema that "X member is required" or "Y must be between 0 and 100" or confirm that an email address entry follows a particular pattern. This saves a lot of conditional statements in your code and offers much more robust validation.

- What are some ways to decide which code to test?
  You should test everything that has a direct impact on the outcome of your program, 
  and also code that has a conditional return i.e. "If X return Y else return Z".
  You should also test code in which a custom error can be returned.

- What does `RETURNING` do in SQL? When would you use it?
  RETURNING is used when we are inserting or updating information in a database, and we want to use parts of that information
  in another piece of that code. You do not need to use RETURNING on a SELECT statement, as it already returns data. 

- What are some differences between Web Sockets and HTTP?
  The main difference is that in HTTP the connection goes in one direction, and then the connection closes. With web sockets,
  the connection remains open, and it is also bidirectional, meaning that the server and client can communicate in real time without
  refreshing the page.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I liked both but honestly prefer Flask simply because I prefer Python. 
  
  
