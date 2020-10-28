# Reverse-Engineering-Code

![license](https://img.shields.io/badge/license-MIT-blue.svg) 

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Walkthrough](#walkthrough)
* [Usage](#usage)
* [Contributions](#contributions)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)


## Description

This is applications allows users to create a unique login that incorporates an email address and password.  Passport.js is used to create a user account which saves login credentials and encrypts it by using hash and salt sync.

![App Screenshot](https://github.com/kent28808/Reverse-Engineering-Code/blob/main/Develop/Photos/app%20screenshot.png)


## Built With

* [HTML](https://www.w3schools.com/html/)
* [CSS](https://www.w3schools.com/css/)
* [Node.js](https://nodejs.org/en/)
* [mysql](https://www.mysql.com/)
* [Sequelize](https://sequelize.org/)
* [Passport.js](http://www.passportjs.org/)
* [Express](https://expressjs.com/)


## Installation

```
npm run watch
```

## Walkthrough

Below is a walkthough of how the app functions and the roles each file plays.

1. db/myschema.sql.  
I created a database to launch the app locally to see what the front end looked like and the functionality.  I created a user test@gmail.com and set the password as 1234.  As you can see in password column, this app encrypts it.

![Data Screenshot](https://github.com/kent28808/Reverse-Engineering-Code/blob/main/Develop/Photos/mysql.png)

2. develop/config/middleware/isAuthenticated.js
This allows only registered users to access the members page.  If the user does not have an account, it redirects them to the home page.
![middleware Screenshot](https://github.com/kent28808/Reverse-Engineering-Code/blob/main/Develop/Photos/middleware.png)

3. config.json
This holds all credentials for the owner of the database.

4. passport.js
This uses local strategy which requires the user to login with a valid email address and password.
Passport also authenticates state across HTTPs requests.
![passport.js Screenshot](https://github.com/kent28808/Reverse-Engineering-Code/blob/main/Develop/Photos/passport.png)

5. models index.js and user.js
-index.js returns the stored users login credentials from the database, creates a model for each file and exports the database.
-user.js encrypts the users password and validates user though the login page.

6. Public frontend files
-login.js deals with validation of inputs for the email address and password.  Has an event listener for the submit button.  Redirects user to members page if login in successful. 
-members.js updates html on members page.
-signup.js deals with new user creating new login credentials and also has an event listener for the submit button.
-style.css holds all the styles and colors for the html webpages.  
-login.html webpage that allows the user to enter login credentials.
-members.html webpage that only registered user have access to once login is validated.
![members.html Screenshot](https://github.com/kent28808/Reverse-Engineering-Code/blob/main/Develop/Photos/members%20page.png)
-signup.html webpage that allows new users to signup and with an email address and password.

7. Routes
-api-routes
Routes the user with valid login credentials to the members page, signing up of a new user, logging out of a user and getting user data.
-html-routes
Routes user to members page if they already have an account.  Routes user who does not have an account to the signup page.

8. package-lock.json displays all the technologies, libaraies and versions used.

9. package.json displays all dependencies, authors, and licenses.

10. server.js lists and establishes the packages and ports. Uses express and middleware needed for authentication.  Tracks the users login status.


## Contributions

This project was written by: Ken Tanoue.
- [Link to Portfolio Site](https://kent28808.github.io/KT-Portfolio/)
- [Link to Github](https://github.com/kent28808/)

   
## License

MIT

## Tests

```
node server.js
```

## Questions



If you have any questions about this repo, open an issue or contact me at kent28808@github.com.
