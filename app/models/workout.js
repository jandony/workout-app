// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Workout" model that matches up with DB
var Workout = sequelize.define("workout", {
  name: Sequelize.STRING,
  type: Sequelize.STRING,
  wod_name: Sequelize.STRING,
  duration: Sequelize.INTEGER
//   created_at: Sequelize.DATE
});

// Syncs with DB
Workout.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Workout;
