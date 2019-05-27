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

// Aprova ou desaprova um link cadastrado.
exports.approval = function (req, res) {
    if (req.params.aprovacao == 'S' || req.params.aprovacao == 'N') {
        var mod = {
            "status":  req.params.aprovacao
        }

      link.findByIdAndUpdate(req.params.id, mod, {new: true} ,function (err, posts) {
          if (err)
              res.send(err);
          res.json({
              message: 'Link modificado!',
              data: posts
          });
      });
    } else {
        res.send('Tag de aprovação inválida!');
    }
};

// Retorna os tutoriais dependendo do seu status
exports.pendencies = function (req, res) {
  if (req.params.status == 'S' || req.params.status == 'N' || req.params.status == null) {
      find = {
          "status": req.params.status
      }

      link.find(find, function (err, posts) {
          if (err) {
              res.json({
                status: "error",
                message: err,
              });
          }
          res.json({
              status: "success",
              message: "Links pendentes recuperados com sucesso!",
              data: posts
          });
      });
  } else {
    res.send("Tag de status inválida!");
  }
};

// Edita um link já cadastrado.
exports.edit = function (req, res) {
  link.findByIdAndUpdate(req.params.id, req.body, {new: true} ,function (err, posts) {
      if (err)
          res.send(err);
      res.json({
          message: 'Link modificado!',
          data: posts
      });
  });

};
