const mongoose = require("mongoose");

const { Schema } = mongoose;

const ToDoSchema = new Schema({
    dueDate: {
        type: String
    },
    name: {
        type: String,
    },
    isCompleted: {
        type: Boolean,
    },
    categoryid: {
        type: String,
    },
});


const ToDo = mongoose.model("todos", ToDoSchema);

module.exports = ToDo;