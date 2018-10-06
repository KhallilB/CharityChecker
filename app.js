//Dependencies
const mongoose = require('mongoose');
const express = require('express');
const exphbs =  require('express-handlebars');
const methodOverride = require("method-override");

const app = express();
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


//Database
mongoose.connect('mongodb://localhost/CharityChecker', { useNewUrlParser: true });

//Routes
require('./controllers/posts')(app);
// require('./controllers/users')(app);

module.exports = (app);

app.listen(3000, () => {
    console.log("WE OUTCHEA!")
})