class NewsController {

    index(req, res) {
        res.render("news");
    }
    detail(req, res) {
        res.send("news's detail");
    }
}

module.exports = new NewsController;