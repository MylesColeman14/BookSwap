console.log("htmlRouter R")

const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connection.js');

const app = express();

var htmlRouter = express.Router();
htmlRouter.use(bodyParser.urlencoded({ extended: false }));
htmlRouter.use(bodyParser.json());
htmlRouter.route('/')

  .get((req, res, next) => {
    connection.query("SELECT * FROM books;", function(err, data) {
      if (err) throw err;
      console.log(data)
      res.render("index", { books: data });
      // res.send(data);
    });
  });
module.exports = htmlRouter