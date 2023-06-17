const Task = require('../models/task_to_do_model')

async function uploadTasksToCategory( params, callback) {
    Task.create({
        name: params.name,
        dueDate: params.dueDate,
        isCompleted: params.isCompleted,
        categoryid: params.categoryid,
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


async function getAllTasksByCategoryId(categoryid , callback) {
    Task.find({categoryid: categoryid})
    .then((task) => {
        return callback(null, {task})
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