const Comment = require("../models/commentModel");

exports.getComment = async (videoId) => {
  const data = await Comment.find({ videoThumbnailId: videoId });
  return data;
};

exports.createComment = async (body, videoId) => {
  body.videoThumbnailId = videoId;
  body.timestamp = new Date();
  const data = Comment.create(body);
  return data;
};
