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
