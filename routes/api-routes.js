let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
       status: 'API funcionando!',
       message: 'Testando rotas da api',
    });
});

var linkController = require('../controllers/linkController');

router.route('/links')
.get(linkController.index);

router.route('/newlinks')
.post(linkController.new);

module.exports = router;
