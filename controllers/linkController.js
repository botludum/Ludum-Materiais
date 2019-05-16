var link = require('../models/linkModel');

exports.index = function (req, res) {
    link.get(function (err, posts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Links recuperados com sucesso!",
            data: posts
        });
    });
};
