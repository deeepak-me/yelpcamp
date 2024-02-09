const mongoose = require("mongoose");
const cities = require("./cities");
const { descriptors, places } = require("./seedHelpers");
const Campground = require("../models/campground");

//connecting to mongoose

mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error :"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)]; //function to select random element from an array

const seedDB = async () => {
  await Campground.deleteMany({}); // to delete existing data
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image: "https://source.unsplash.com/collection/483251",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ipsum suscipit fugiat maiores ad deserunt illum, id corporis harum explicabo voluptatum quas vel dicta incidunt. Incidunt rerum eius quod commodi!",
      price,
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close(); //close the connection
});

//it has nothing to do with the main app. it's just if we ever wanted  to seed our database
//we now cam call this index.js, run it as node; it delete everything in our database, but it
//replaces everything with some new campgrounds
