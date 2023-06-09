const taskController = require('../controllers/task_controller')
const express = require('express')
const router = express.Router()

router.post("/createNewTask", taskController.createNewTask);

router.get("/getAllTasks", taskController.getAllTasks);

router.get("/get-all-tasks-by-categoryid", taskController.getAllTasksByCategoryId)

router.delete("/deleteTask/:id", taskController.deleteTask);

router.put("/updateTaskCompletion/:id", taskController.updateTaskCompletion);

module.exports = router 