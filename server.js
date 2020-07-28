const express = require("express");
const mongoose = require("mongoose");
const app = express();
const htmlRoutes = require("./routes/htmlroutes.js");
const apiRoutes = require("./routes/apiroutes");
const { Workout } = require("./models/index.js");

const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose connected.");
});

app.get("/api/config", (req, res) => {
  Workout.find({}).then((allWorkout) => {
    res.json({
      success: true,
      data: allWorkout,
    });
  });
});

app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
