// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the workouts
  app.get("/api/workouts", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Post.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbUserPerformanceWeights) {
      res.json(dbUserPerformanceWeights);
    });
  });

  // Get route for retrieving a single workout
  app.get("/api/workouts/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.UserPerformanceWeights.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbUserPerformanceWeights) {
      res.json(dbUserPerformanceWeights);
    });
  });

  // POST route for saving a new workout
  app.post("/api/workouts", function(req, res) {
    db.UserPerformanceWeights.create(req.body).then(function(UserPerformanceWeights) {
      res.json(UserPerformanceWeights);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/workouts/:id", function(req, res) {
    db.UserPerformanceWeights.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(UserPerformanceWeights) {
      res.json(UserPerformanceWeights);
    });
  });

  // PUT route for updating posts
  app.put("/api/workouts", function(req, res) {
    db.UserPerformanceWeights.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(UserPerformanceWeights) {
      res.json(UserPerformanceWeights);
    });
  });
};
