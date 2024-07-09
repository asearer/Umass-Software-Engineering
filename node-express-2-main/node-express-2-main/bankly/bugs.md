1). user.js - User.get() method did not throw error with a nonexistent user.
            - it was missing the keyword "throw"

2). middleware - requireAdmin does not allow logged in users other than the admin to make changes
               - to their own data.
               - created a new function "requireAdminOrUser" to allow both admin AND the logged in
               - user whom the data belongs to to edit their own data.

3). user.js - User.getAll() method returned email and phone number, and GET "/users" docstring
            - said to only return { username, first_name, last_name }

4). app.js - module.exports line was added twice.

5). auth.js (routes) - line 45 was a Promise that needed to be awaited (added the keyword "await")

6). users.js (routes) - line 103 needed to be awaited (added the keyword "await")
