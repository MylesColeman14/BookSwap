const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

const db = require("./models");
// routing 
const apiRouter = require('./app/routing/apiRouter.js')
const htmlRouter = require('./app/routing/htmlRouter.js')
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "handlebars");

app.use(express.static('app/public'));


app.use('/', htmlRouter)
app.use('/api', apiRouter)

// app.listen(port, () => {
//   console.log("App listening on PORT " + port);
// });

db.sequelize.sync({ force: true }).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});
