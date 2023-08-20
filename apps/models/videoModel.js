const mongoose = require('mongoose');
const videoSchema = new mongoose.Schema(
    {
    youtube_url: { type: String, required: true },
    thumbnailImage: { type: String, required: true },
    });
  
const VideoModel = mongoose.model('Video', videoSchema);
module.exports = VideoModel;