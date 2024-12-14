const app = require('express')
const router = app.Router();

var newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.detail);
router.use('/', newsController.index);

module.exports = router;