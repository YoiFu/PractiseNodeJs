const newsRoute = require('./news')
const homeRoute = require('./home')
const siteRoute = require('./site')

function route(app) {
    app.use('/news', newsRoute);
    app.use('/search', siteRoute);
    app.use('/', homeRoute);
}

module.exports = route;