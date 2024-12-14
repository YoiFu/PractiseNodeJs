const app = require('express')
const router = app.Router();

var homeController = require('../app/controllers/HomeController');

router.use('/', homeController.index);

module.exports = router;