const express = require('express');
const router = express.Router();

const tareaController = require('../controllers/tareaController');

router.post('/', tareaController.createTarea);
router.get('/', tareaController.getTareas);

module.exports = router;