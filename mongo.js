const mongoose = require("mongoose");
mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true });

const animals = mongoose.model(
  "animals",
  {
    name: String,
    age: Number,
    gender: String,
  },
  "animals"
);

module.exports = {
  animals,
};
