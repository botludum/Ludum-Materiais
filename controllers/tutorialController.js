var tutorial = require('../models/tutorialModel');

exports.index = function (req, res) {
    tutorial.get(function (err, posts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Tutoriais recuperados com sucesso!",
            data: posts
        });
    });
};

exports.new = function (req, res) {
    var newTutorial = new tutorial(req.body);
    newTutorial.save(function (err) {
        if (err)
            res.send(err);
        res.json({
            message: 'Tutorial adicionado!',
            data: newTutorial
        });
    });
};
