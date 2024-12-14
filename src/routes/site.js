const app = require('express')
const router = app.Router();

var siteController = require('../app/controllers/SiteController');

router.use('/', siteController.index);

module.exports = router;