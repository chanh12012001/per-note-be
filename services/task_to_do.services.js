const fs = require('fs')
const Task = require('../models/task_to_do_model')

async function uploadTasksToCategory(categoryId, params, callback) {
    Task.create({
        name: params.name,
        dueDate: params.dueDate,
        isCompleted: params.isCompleted,
        categoryId: categoryId,
    })
    .then((task) => {
        return callback(null, {message: 'Thêm thành công', task})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function deleteTasks(params, callback) {
    Task.deleteOne({_id: params})
    .then((_) => {
        return callback(null, {message: 'Thao tác thành công'})
    })
    .catch((_) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}


async function getAllTasksByCategoryId(categoryId,dueDate , callback) {
    Task.find({categoryId: categoryId, dueDate: dueDate})
    .then((todos) => {
        return callback(null, {todos})
    })
    .catch((error) => {
        return callback(error)
    })
}

module.exports = {
    uploadTasksToCategory,
    getAllTasksByCategoryId,
    deleteTasks,
}