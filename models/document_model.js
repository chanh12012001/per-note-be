const mongoose = require("mongoose");

const { Schema } = mongoose;

const DocumentSchema = new Schema({
    createdAt: {
        type: Date
    },
    documentUrl: {
        type: String,
    },
    cloudinaryId: {
        type: String,
    },
    userId: {
      type: String,
    },
});

DocumentSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
  });

const Document = mongoose.model("documents", DocumentSchema);

module.exports = Image;