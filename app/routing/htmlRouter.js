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
    console.log(req.body)
    connection.query("SELECT title, author, isbn, sales.asking_price from sales INNER JOIN books on title  = books.title WHERE sales.book_id =  books.id", function(err, data) {
      if (err) throw err;
      console.log(data)
      res.render("index", { books: data });
      // res.send(data);
    });

  })

  .post((req, res, next) => {
  // Test it
    console.log('You sent, ' + JSON.stringify(req.body));
  //console.log("req.body", req.body)
  // console.log(req.body.burger_name)

  // Test it
  // return res.send('You sent, ' + req.body.task);

     connection.query("INSERT INTO books (title, author, isbn) VALUES (?,?,?)", [req.body.title, req.body.author, req.body.isbn], function(err, result) {
  //   if (err) throw err;
        //console.log(result);
      });

      res.redirect("/");
  });
module.exports = htmlRouter;