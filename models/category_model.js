const mongoose = require("mongoose");

const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: {
    type: String,
  },
  icon: {
    type: String,
  },
  color: {
    type: String,
  },
  userId: {
    type: String,
  },
});

const Category = mongoose.model("categories", CategorySchema);

module.exports = Category;