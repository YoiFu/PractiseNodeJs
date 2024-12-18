var StudentObject = require('../models/Student');

class HomeController {

    async index(req, res) {
        // res.render("home");
        try {
            var result = await StudentObject.find();
            res.json(result);
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = new HomeController;