let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
       status: 'API funcionando!',
       message: 'Testando rotas da api',
    });
});

var linkController = require('../controllers/linkController');
var tutorialController = require('../controllers/tutorialController');
var usersController = require('../controllers/usersController');
const authorize = require('../helpers/authorize');
const Role = require('../helpers/role');

router.route('/links')
.get(linkController.index);

router.route('/links/cadastrar')
.post(linkController.new);

router.route('/links/:id/:aprovacao')
.put(linkController.approval);

router.route('/links/aprovados/:status')
.get(linkController.pendencies);

router.route('/links/pendentes')
.get(linkController.pendencies);

router.route('/linkEditar/:id')
.put(linkController.edit);

router.route('/tutoriais')
.get(tutorialController.index);

router.route('/tutoriais/aprovados/:status')
.get(tutorialController.pendencies);

router.route('/tutoriais/pendentes')
.get(tutorialController.pendencies);

router.route('/tutoriais/cadastrar')
.post(tutorialController.new);

router.route('/tutoriais/:id/:aprovacao')
.put(tutorialController.approval);

router.route('/tutorialEditar/:id')
.put(tutorialController.edit);

router.route('/authenticate').post(usersController.authenticate);     // public route
router.get('/', authorize(Role.Admin), usersController.getAll); // admin only
router.get('/:id', authorize(), usersController.getById);       // all authenticated users
module.exports = router;
