const mongoose = require("mongoose");

const { Schema } = mongoose;

const ToDoSchema = new Schema({
    dueDate: {
        type: Date
    },
    name: {
        type: String,
    },
    isCompleted: {
        type: Boolean,
    },
    categoryId: {
        type: String,
    },
});


const ToDo = mongoose.model("todos", ToDoSchema);

module.exports = ToDo;