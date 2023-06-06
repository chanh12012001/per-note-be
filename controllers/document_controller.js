const documentService = require('../services/document.services')


var functions = {
    uploadDocument: async (req,res) => {
        const { params } = req.body
        const files= req.files

        documentService.uploadDocument( params , files, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        }) 
    },  

    getAllDocument: (req, res, next) => {
        var userId = req.headers['userId']; 
        documentService.getAllDocument(userId, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    deleteDocument: (req, res) => {
        var documentIds = req.params.ids.split(',')
        
        documentService.deleteDocument(documentIds,  (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    }
}

module.exports = functions