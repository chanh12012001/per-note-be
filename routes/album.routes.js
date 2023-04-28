const albumController = require('../controllers/album_controller')
const express = require('express')
const router = express.Router()

router.post("/createNewAlbum", albumController.createNewAlbum);

router.get("/getAllAlbums", albumController.getAllAlbums);

router.delete("/deleteAlbum/:id", albumController.deleteAlbum);

router.put("/updateAlbum/:id", albumController.updateAlbum);

router.get("/getAllFirstImageFromAlbum", albumController.getAllFirstImageFromAlbum);

module.exports = router  