const documentController = require('../controllers/document_controller')
const express = require('express')
const router = express.Router()

router.post("/createNewDocument", documentController.createNewDocument);

router.get("/getAllDocuments", documentController.getAllDocuments);

router.delete("/deleteDocument/:id", documentController.deleteDocument);

router.put("/updateDocument/:id", documentController.updateDocument);

module.exports = router  