const Videos = require("../models/videoModel")

exports.getAllVideo = () => {
    return Videos.find()
}

exports.getVideoById = (id) => {
    return Videos.findById(id);
};

exports.createVideo = (body) => {
    return Videos.create(body);
}