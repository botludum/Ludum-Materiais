var tutorial = require('../models/tutorialModel');

// Recupera todos os tutoriais cadastrados.
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

// Adiciona um novo tutorial ao BD.
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

// Aprova ou desaprova um tutorial cadastrado.
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

// Retorna os tutoriais dependendo do seu status
exports.pendentes = function (req, res) {
  if (req.params.status == 'S' || req.params.status == 'N' || req.params.status == null) {
      find = {
          "status": req.params.status
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
  } else {
    res.send("Tag de status inválida!");
  }
};
