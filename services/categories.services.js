const Category = require('../models/category_model')

async function createNewCategory(params, callback) {
    Category.create({
        name: params.name,
        color: params.color,
        icon: params.icon,
        userId: params.userId,  
    })
    .then((category) => {
        return callback(null, {message: 'Thêm thành công', category})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function getAllCategories(params, callback) {
    Category.find({userId: params})
    .then((categories) => {
        return callback(null, {categories})
    })
    .catch((error) => {
        return callback(error)
    })
}


async function deleteCategory(params, callback) {
    Category.deleteOne({_id: params})
    .then((_) => {
        return callback(null, {message: 'Thao tác thành công'})
    })
    .catch((_) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

async function getCategoryById(paramsID, callback) {
    Category.findById(paramsID)
    .then((category) => {
        return callback(null, category)
    })
    .catch((_) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

async function updateCategory(paramsId, categoryBody ,callback) {
    Category.findByIdAndUpdate(paramsId, {
        name: categoryBody.name,
        color: categoryBody.color,
        icon: categoryBody.icon  
    }).then((_) => {
        return callback(null, {message: 'Thao tác thành công'})
    })
    .catch((_) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}


module.exports = {
    createNewCategory,
    getCategoryById,
    getAllCategories,
    deleteCategory,
    updateCategory,
}