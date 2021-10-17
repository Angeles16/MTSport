const { Router } = require('express');
const router = Router();

const controller = require('../controller/mtSport.controller');

router.get('/', controller.renderIndex);

module.exports = router;