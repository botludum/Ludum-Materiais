var mongoose = require('mongoose');

var linkSchema = mongoose.Schema({
    title: String,
    type: String,
    link: String,
    status: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

var link = module.exports = mongoose.model('link', linkSchema);

module.exports.get = function (callback, limit) {
    link.find(callback).limit(limit);
}
