const cloudinary = require('../config/cloudinary.config')
const fs = require('fs')
const Document = require('../models/document_model')

async function uploadDocument(params, files, callback) {
    const uploader = async (path) => await cloudinary.uploads(path, 'per-note/document')
    const documents = [];
    
    for (const file of files) {
        const { path } = file 
     
        const newPath = await uploader(path)
                
        const document = Document({
            createdAt: Date.now(),
            documentUrl: newPath.url,
            cloudinaryId: newPath.id,
            userId: params.userId,
        })

        documents.push(document)
    
        fs.unlinkSync(path)
    }

    Document.insertMany(documents)
    .then((documents) => {
        return callback(null, {message: 'Thêm thành công', documents})
    })
    .catch((err) => {
        return callback(err)
    })  
}

async function getAllDocument(params, callback) {
    Document.find({userId: params})
    .then((documents) => {
        return callback(null, {documents})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function deleteDocument(documentIds, callback) {

    for (var documentId of documentIds) {
        Image.findOne({_id: documentId}).then((document) => {
             cloudinary.cloudinary.v2.uploader.destroy(document.cloudinaryId)
        })
    }  

    Document.deleteMany({_id: {$in: documentIds}})
    .then((_) => {
        return callback(null, {message: 'Thao tác thành công'})
    })
    .catch((error) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

module.exports = {
    uploadDocument,
    getAllDocument,
    deleteDocument
}