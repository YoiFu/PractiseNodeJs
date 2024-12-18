const app = require('express');
const router = app.Router();

var homeController = require('../app/controllers/HomeController');

router.use('/', async (req, res) => { await homeController.index(req, res); });

module.exports = router;