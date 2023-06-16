const tasksCategoryController = require('../controllers/task_to_do_controller')
const express = require('express')
const router = express.Router()

router.post("/upload-tasks-category", tasksCategoryController.uploadTasksToCategory)

router.get("/get-all-tasks-by-categoryid", tasksCategoryController.getAllTasksByCategoryId)

router.delete("/delete-tasks-of-category/:ids", tasksCategoryController.deleteTask)

module.exports = router  
 