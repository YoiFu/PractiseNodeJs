var StudentObject = require('../models/Student');

class HomeController {

    async index(req, res) {
        try {
            var result = await StudentObject.find().lean();
            res.render("home", { result });
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = new HomeController;