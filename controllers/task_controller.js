const taskService = require("../services/tasks.services")

var functions = {
    createNewTask: (req, res, next) => {
        taskService.createNewTask(req.body, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    getAllTasks: (req, res, next) => {
        var userId = req.headers['userid']; 
        taskService.getAllTasks(userId, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    getAllTasksByCategoryId: (req, res, next) => {
        const date = req.headers['date'];
        const taskcategoryid = req.headers['taskcategoryid'];
        console.log(req.headers);
        taskService.getAllTasksByCategoryId(taskcategoryid, date ,(error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    deleteTask: (req, res, next) => {
        var taskId = req.params.id; 
        taskService.deleteTask(taskId, (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
    },

    updateTaskCompletion: (req, res, next) => {
        var taskId = req.params.id; 
        taskService.updateTaskCompletion(taskId, (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
    }
}

module.exports = functions