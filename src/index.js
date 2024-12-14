const express = require('express')
const morgan = require('morgan')
const exprHandleBars = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000
const db = require('./config/db')

db.connect();

const route = require('./routes')

const hbs = exprHandleBars.create({
    extname: ".hbs"
});

// simple configuration
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan('combined'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Template engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

route(app);

app.listen(port, () => console.log('Example listening at http://localhost:${port}'));