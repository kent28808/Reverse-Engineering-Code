// Calling library "passport"
var passport = require("passport");
// Calling a Strategy class off of passport-local.
var LocalStrategy = require("passport-local").Strategy;

// importing database models.
var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email"
  },
  //call back function that takes in email, password, and another callback function named "done".
  function(email, password, done) {
    // When a user tries to sign in this code runs
    // find.One will find specific user by email.
    db.User.findOne({
      where: {
        email: email
      }
      // dbUser is what is returned from the .fineOne.
    }).then(function(dbUser) {
      // If there's no user with the given email then a message of "Incorrect email will be prompted."
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
