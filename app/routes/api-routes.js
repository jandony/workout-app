// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Workout = require("../models/workout.js");

// Routes
// =============================================================
module.exports = function(app) {
  
  // Get all books
  app.get("/api/all", function(req, res) {
    Workout.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get all workouts of a specific athlete name
  app.get("/api/:name", function(req, res) {
    Workout.findAll({
      where: {
        name: req.params.name
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get all books from a specific workout type
  app.get("/api/type/:type", function(req, res) {
    Workout.findAll({
      where: {
        type: req.params.type
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get a specific workout
  app.get("/api/wod/:wod", function(req, res) {
    Workout.findAll({
      where: {
        wod_name: req.params.wod
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get all "long" books (books 150 pages or more)
  app.get("/api/workouts/long", function(req, res) {
    Workout.findAll({
      where: {
        duration: {
          $gte: 150
        }
      },
      order: [["duration", "DESC"]]
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get all "short" books (books 150 pages or less)
  app.get("/api/workouts/short", function(req, res) {
    Workout.findAll({
      where: {
        duration: {
          $lte: 150
        }
      },
      order: [["duration", "ASC"]]
    }).then(function(results) {
      res.json(results);
    });
  });

  // Add a book
  app.post("/api/new", function(req, res) {
    console.log("Workout Data:");
    console.log(req.body);
    Workout.create({
      name: req.body.name,
      type: req.body.type,
      wod_name: req.body.wod_name,
      duration: req.body.duration
    }).then(function(results) {
      res.json(results);
    });
  });

  // Delete a book
  app.delete("/api/book/:id", function(req, res) {
    console.log("Book ID:");
    console.log(req.params.id);
    Workout.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.end();
    });
  });
};
