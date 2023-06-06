const documentController = require('../controllers/document_controller')
const express = require('express')
const router = express.Router()

router.post("/uploadDocument", documentController.createNewDocument);

router.get("/getAllDocuments", documentController.getAllDocuments);

router.delete("/deleteDocument/:id", documentController.deleteDocument);

module.exports = router  