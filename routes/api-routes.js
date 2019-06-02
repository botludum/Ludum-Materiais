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
.post(authorize(), linkController.new);

router.route('/links/:id/:aprovacao')
.put(authorize(Role.Admin), linkController.approval);

router.route('/links/aprovados/:status')
.get(authorize(Role.Admin), linkController.pendencies);

router.route('/links/pendentes')
.get(authorize(Role.Admin), linkController.pendencies);

router.route('/linkEditar/:id')
.put(authorize(Role.Admin), linkController.edit);

router.route('/tutoriais')
.get(tutorialController.index);

router.route('/tutoriais/aprovados/:status')
.get(authorize(Role.Admin), tutorialController.pendencies);

router.route('/tutoriais/pendentes')
.get(authorize(Role.Admin), tutorialController.pendencies);

router.route('/tutoriais/cadastrar')
.post(authorize(), tutorialController.new);

router.route('/tutoriais/:id/:aprovacao')
.put(authorize(Role.Admin), tutorialController.approval);

router.route('/tutorialEditar/:id')
.put(authorize(Role.Admin), tutorialController.edit);

router.route('/usuario/auth').post(usersController.authenticate);    
router.get('/usuario', authorize(Role.Admin), usersController.getAll); 
router.get('/usuario/:id', authorize(), usersController.getById);       
module.exports = router;
