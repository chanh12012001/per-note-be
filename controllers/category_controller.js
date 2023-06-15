const categoryService = require('../services/category.services')

var functions = {
    createNewCategory: (req, res, next) => {
        categoryService.createNewCategory(req.body, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    getAllCategories: (req, res, next) => {
        var userId = req.headers['userid']; 
        categoryService.getAllCategories(userId, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    deleteCategory: (req, res, next) => {
        var categoryId = req.params.id; 
        categoryService.deleteCategory(categoryId, (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
    },

    updateCategory: (req, res, next) => {
        var categoryId = req.params.id; 
        var categoryBody = req.body;
        categoryService.updateCategory(categoryId, categoryBody, (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
    },
}

module.exports = functions