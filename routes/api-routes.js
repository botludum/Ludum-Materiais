let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
       status: 'API funcionando!',
       message: 'Testando rotas da api',
    });
});

var linkController = require('../controllers/linkController');
var tutorialController = require('../controllers/tutorialController');

router.route('/links')
.get(linkController.index);

router.route('/newlinks')
.post(linkController.new);

router.route('/tutoriais')
.get(tutorialController.index);

module.exports = router;
