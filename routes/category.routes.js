const categoryController = require('../controllers/category_controller')
const express = require('express')
const router = express.Router()

router.post("/createNewCategory", categoryController.createNewCategory);

router.post("/getCategoryById/:id", categoryController.getCategoryById);

router.get("/getAllCategories", categoryController.getAllCategories);

router.delete("/deleteCategory/:id", categoryController.deleteCategory);

router.put("/updateCategory/:id", categoryController.updateCategory);

module.exports = router  