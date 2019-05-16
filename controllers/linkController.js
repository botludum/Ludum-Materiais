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

exports.new = function (req, res) {
    var newLink = new link(req.body);
    console.log(req.body);
    newLink.save(function (err) {
        if (err)
            res.send(err);
        res.json({
            message: 'Material adicionado!',
            data: newLink
        });
    });
};
