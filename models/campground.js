const mongoose = require("mongoose");

const Scheme = mongoose.Schema;

const CampgroundSchema = new Scheme({
  title: String,
  image: String,
  price: Number,
  description: String,
  location: String,
});

module.exports = mongoose.model("Campground", CampgroundSchema);
