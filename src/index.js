const express = require('express')
const morgan = require('morgan')
const exprHandleBars = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000

const hbs = exprHandleBars.create({
    extname: ".hbs"
});

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan('combined'));

// Template engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'))

app.get('/', (req, res, next) => {
    res.render('home');
});

app.get('/news', (req, res, next) => {
    res.render('news');
});

app.get('/search', (req, res, next) => {
    console.log(req.query.q);
    res.render('search');
});

app.post('/search', (req, res, next) => {
    res.render('search');
});

app.listen(port, () => console.log('Example listening at http://localhost:${port}'));