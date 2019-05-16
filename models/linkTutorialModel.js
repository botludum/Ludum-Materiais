var mongoose = require('mongoose');

var linkschema = mongoose.Schema({
    title: String,
    link: String
});

var tutorialschema = mongoose.Schema({
    title: String,
    description: String
});

var linkTutorialSchema = mongoose.Schema({
    link: [linkschema],
    tutorial: [tutorialschema],
    create_date: {
        type: Date,
        default: Date.now
    }
});

var linkTutorial = module.exports = mongoose.model('linkTutorial', linkTutorialSchema);

module.exports.get = function (callback, limit) {
    linkTutorial.find(callback).limit(limit);
}