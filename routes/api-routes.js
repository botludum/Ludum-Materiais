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

router.route('/links/cadastrar')
.post(linkController.new);

router.route('/tutoriais')
.get(tutorialController.index);

router.route('/tutoriais/aprovados/:status')
.get(tutorialController.pendentes);

router.route('/tutoriais/pendentes')
.get(tutorialController.pendentes);

router.route('/tutoriais/cadastrar')
.post(tutorialController.new);

router.route('/tutoriais/:id/:aprovacao')
.put(tutorialController.approval);

router.route('/tutorialEditar/:id')
.put(tutorialController.edit);

module.exports = router;
