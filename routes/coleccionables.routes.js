const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const coleccionablesController = require('../controllers/coleccionables.controller');

router.get('/add', isAuth, coleccionablesController.get_add);
router.post('/add', isAuth, coleccionablesController.post_add);

router.get('/list', isAuth, coleccionablesController.get_list);
router.get('/pregunta', isAuth, coleccionablesController.get_pregunta);
router.get('/list/:id', isAuth, coleccionablesController.get_list);
router.get('/:id', isAuth, coleccionablesController.get_list);

router.get('/', isAuth, coleccionablesController.get_list);

module.exports = router;