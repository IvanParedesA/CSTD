const express = require('express');
const router = express.Router();
const coleccionablesController = require('../controllers/coleccionables.controller');

router.get('/add', coleccionablesController.get_add);
router.post('/add', coleccionablesController.post_add);

router.get('/list', coleccionablesController.get_list);
router.get('/pregunta', coleccionablesController.get_pregunta);
router.get('/list/:id', coleccionablesController.get_list);
router.get('/:id', coleccionablesController.get_list);

router.get('/', coleccionablesController.get_list);

module.exports = router;