const tasksCategoryService = require('../services/task_to_do.services')


var functions = {
    uploadTasksToCategory: async (req,res) => {
        tasksCategoryService.uploadTasksToCategory(req.body, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },  

    getAllTasksByCategoryId: (req, res, next) => {
        var dueDate = req.params.dueDate;
        var categoryId = req.headers['categoryid']; 
        tasksCategoryService.getAllTasksByCategoryId(categoryId, dueDate ,(error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    deleteTask: (req, res) => {
        var taskId = req.params.id; 
        tasksCategoryService.deleteTasks(taskId, (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
    }
}

module.exports = functions