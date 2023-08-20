const videoServices = require('../services/videoService')

exports.createVideo = async (req, res) => {
    try {
        const newVideo = await videoServices.createVideo(req.body);
        res.status(200).json({
            status:200,
            message:"success",
            newVideo: {
                videoThumbnail: newVideo,
              },
        });     
    } catch (error) {
        res.status(400).json({ error: 'Bad request' });
    }
}

exports.getAllVideo = async(req,res) => {
    try {
        const newVideo = await videoServices.getAllVideo();
        res.status(200).json({
            status:200,
            message:"success",
            data : newVideo
        }); 
    } catch (error) {
        res.status(400).json({ error: 'Bad request' });
    }
}

exports.getVideoById = async(req,res) => {
    try {
        const newVideo = await videoServices.getVideoById(req.params.id);
        res.status(200).json({
            status:200,
            message:"success",
            data : newVideo
        }); 
    } catch (error) {
        res.status(400).json({ error: 'Bad request' });
    }
}