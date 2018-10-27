module.exports = function () {
    const express = require('express');
    const bodyParser = require('body-parser');
    const handlebar = require('express-handlebars')
    const session = require('express-session');
    const flash = require('express-flash');
    const app = express();
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true
    }));

    app.engine('handlebars', handlebar({
        defaultLayout : 'main'
    }));
    app.set('view engine', 'handlebars');
    app.use(flash());

    app.use(bodyParser.urlencoded({
        extended: false
    }))
    // parse application/json
    app.use(bodyParser.json())

    app.use(express.static(__dirname + './public/'));

    return app;
}