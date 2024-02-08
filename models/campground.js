const mongoose = require("mongoose");

const Scheme = mongoose.Schema;

const CampgrundSchema = new Scheme({
  title: String,
  price: String,
  description: String,
  location: String,
});

module.exports = mongoose.model("Campground", CampgrundSchema);
