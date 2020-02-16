const db = require("../models");

module.exports = function(app){

app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  //returns all workouts in the db
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  //creates new workout in the db
  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
    .then(newWorkout => {
      res.json(newWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  })
  
  //adds exercise to workout at workout id passed in url
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.update({_id: req.params.id},{$push:{"exercises": req.body}})
    .then(updatedWorkout => {
      res.json(updatedWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  })

};