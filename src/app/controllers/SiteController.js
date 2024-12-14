class SiteController {

    index(req, res) {
        res.render("search");
    }
}

module.exports = new SiteController;