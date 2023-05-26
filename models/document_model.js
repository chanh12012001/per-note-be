const mongoose = require("mongoose");

const { Schema } = mongoose;

const DocumentSchema = new Schema({
  name: {
    type: String,
  },
  userId: {
    type: String,
  },
});

const DocumentValue = mongoose.model("documents", DocumentSchema);

module.exports = DocumentValue;