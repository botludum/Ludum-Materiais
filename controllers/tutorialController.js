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

exports.approval = function (req, res) {
    if (req.params.aprovacao == 'S' || req.params.aprovacao == 'N') {
        var mod = {
            "status":  req.params.aprovacao
        }

      tutorial.findByIdAndUpdate(req.params.id, mod, {new: true} ,function (err, posts) {
          if (err)
              res.send(err);
          res.json({
              message: 'Tutorial modificado!',
              data: posts
          });
      });
    } else {
        res.send('Tag de aprovação inválida!');
    }
};

exports.pendentes = function (req, res) {
    find = {
      "status": null
    }

    tutorial.find(find, function (err, posts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Tutoriais pendentes recuperados com sucesso!",
            data: posts
        });
    });
};
