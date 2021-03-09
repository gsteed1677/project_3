const mongoose = require("mongoose");
const express = require("express");
const routes = require('./routes')
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//connect to mongoose DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hobbyDB");

// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
