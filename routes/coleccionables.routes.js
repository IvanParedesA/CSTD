const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const canVerColeccionables = require('../util/can-ver-coleccionables');
const canAgregarColeccionables = require('../util/can-add-coleccionable');
const coleccionablesController = require('../controllers/coleccionables.controller');

router.get('/add', isAuth, canAgregarColeccionables, coleccionablesController.get_add);
router.post('/add', isAuth, canAgregarColeccionables, coleccionablesController.post_add);
router.get('/list', isAuth, canVerColeccionables, coleccionablesController.get_list);
router.get('/pregunta', isAuth, canVerColeccionables, coleccionablesController.get_pregunta);
router.get('/list/:id', isAuth, canVerColeccionables, coleccionablesController.get_list);
router.post('/delete', coleccionablesController.post_delete);
router.get('/:id', isAuth, canVerColeccionables, coleccionablesController.get_list);

router.get('/', isAuth, canVerColeccionables, coleccionablesController.get_list);

module.exports = router;