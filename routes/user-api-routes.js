var db = require("../models");

module.exports = function(app) {
  
  // Gets all user information
  app.get("/api/users", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.UserPerformanceWeights
    db.User.findAll({
      include: [db.UserPerformanceWeights]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Selects one user
  app.get("/api/users/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.UserPerformanceWeights
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.UserPerformanceWeights]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Creates a user
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Deletes a user
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};
