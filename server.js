// require('./server/models/quote');
require('./server/config/mongoose');
const   express = require("express"),
        app = express(),
        path = require("path"),
        bodyParser = require('body-parser'),
        session = require('express-session'),
        flash = require('express-flash');
app.use(session({secret: 'keyboardkitteh', resave: false, saveUninitialized: true, cookie: { maxAge: 60000 }}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./client/static")));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
app.use(flash());
require('./server/config/routes.js')(app)
app.listen(1337, function() { console.log("listening on port 1337");});


