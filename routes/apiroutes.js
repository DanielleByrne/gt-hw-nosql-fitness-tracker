const db = require("../models");
const express = require("express");
const router = express.Router();

router.get("/api/workouts", (req, res) => {
  db.Workout.find({}).then((allWorkouts) => {
    res.json(allWorkouts);
  });
});

// router.post("/api/workouts", (req, res) => {
//   db.Workout.create(req.body)
//     .then((newWorkout) => {
//       res.json(newWorkout);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.json({
//         error: true,
//         data: null,
//         message: "error",
//       });
//     });
// });

module.exports = router;
