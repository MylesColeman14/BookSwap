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
    connection.query("SELECT title, author, isbn, sales.asking_price from sales INNER JOIN books on title  = books.title WHERE sales.book_id =  books.book_id", function(err, data) {
      if (err) throw err;
      console.log(data)
      res.render("index", { books: data });
      // res.send(data);
    });

  });

  .post ((req, res, next) => {
  		connection.query("INSERT ")
  })
module.exports = htmlRouter