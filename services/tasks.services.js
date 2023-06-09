const Task = require('../models/task_model')

async function createNewTask(params, callback) {
    Task.create({
        title: params.title,
        note: params.note,
        isCompleted: params.isCompleted,
        date: params.date,
        startTime: params.startTime,
        endTime: params.endTime,   
        // color: params.color, 
        remind: params.remind,
        taskCategoryId: params.taskCategoryId,
        userId: params.userId,  
    })
    .then((task) => {
        return callback(null, {message: 'Thêm thành công', task})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function getAllTasks(params, callback) {
    Task.find({userId: params})
    .then((tasks) => {
        return callback(null, {tasks})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function getAllTasksByCategoryId(taskCategoryId , date, callback) {
    Task.find({taskCategoryId: taskCategoryId , date: date})
    .then((task) => {
        return callback(null, {task})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function deleteTask(params, callback) {
    Task.deleteOne({_id: params})
    .then((tasks) => {
        return callback(null, {message: 'Thao tác thành công'})
    })
    .catch((error) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

async function updateTaskCompletion(params, callback) {
    Task.findByIdAndUpdate(params, {
        isCompleted: 1
    }).then((tasks) => {
        return callback(null, {message: 'Thao tác thành công'})
    })
    .catch((error) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

module.exports = {
    createNewTask,
    getAllTasks,
    deleteTask,
    updateTaskCompletion,
    getAllTasksByCategoryId
}