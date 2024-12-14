var StudentObject = require('../models/Student');

class HomeController {

    async index(req, res) {
        // res.render("home");
        try {
            var result = await StudentObject.find({});
            console.log(rtesult);
        } catch (error) {
            console.error(error);
        }
        // res.send({name: "nguyen Hoang vu"});
    }
}

module.exports = new HomeController;