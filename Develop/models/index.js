//Indicates that the code is in strict mode meaniningyou cannot use undeclared variables.
'use strict';
// Requirement to write to a file.
var fs        = require('fs');
//Provides a way of working with directories and file paths.
var path      = require('path');
// Allows sequelize to be used.
var Sequelize = require('sequelize');
// Returns the basename, final location of a path.
var basename  = path.basename(module.filename);
// Default run environment will be local if node not available.
var env       = process.env.NODE_ENV || 'development';
// Requires for connection to database.
var config    = require(__dirname + '/../config/config.json')[env];
// location where db will be stored.
var db        = {};
// If environment variable is true
if (config.use_env_variable) {
// Then the sequelize variable will be new.  
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  // else this will be used to get the database, username, password from the config.json.
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
// writing to a file.
fs
// Reads from directory via synchronous for the variable in dirname.
  .readdirSync(__dirname)
  // Filters our specific files
  .filter(function(file) {
    // returns specific files that are not equal to zero, the basename or the 3 item from the end of the array in a .js file.
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  // for loop that will iterate through each item in the array.
  .forEach(function(file) {
    // Creates a variable "model" that uses sequelize importing the correct model name.
    var model = sequelize['import'](path.join(__dirname, file));
    // defines the db model as model.
    db[model.name] = model;
  });
// creates an array of keys of the model objects and uses a for loop to go through each one.
Object.keys(db).forEach(function(modelName) {
  // if model name = associate
  if (db[modelName].associate) {
    // then model name = database model.
    db[modelName].associate(db);
  }
});
// lowercase sequelize when being used on files.
db.sequelize = sequelize;
// uppercase sequelize when being used on files.
db.Sequelize = Sequelize;
// Exports to a db (database)
module.exports = db;
