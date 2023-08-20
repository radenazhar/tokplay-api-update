const express = require("express");
const videoController = require('../controller/videoController')
const router = express.Router();

router
  .route("/")
  .get(videoController.getAllVideo)
  .post(videoController.createVideo);

router.route("/:id").get(videoController.getVideoById);

module.exports = router;
