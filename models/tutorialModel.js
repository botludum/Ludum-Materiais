var mongoose = require('mongoose');

var tutorialschema = mongoose.Schema({
    title: String,
    description: String,
    status: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

var tutorial = module.exports = mongoose.model('tutorial', tutorialschema);

module.exports.get = function (callback, limit) {
    tutorial.find(callback).limit(limit);
}
