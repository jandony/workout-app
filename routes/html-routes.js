// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // users route loads the users.html page, where users can see the list of all users in the db
  app.get("/users", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/users.html"));
  });

  // workouts route loads the workouts.html page, where all workouts in the db are displayed
  app.get("/workouts", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/workouts.html"));
  });

  // example route loads view.html
  app.get("/example", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/example.html"));
  });

};
