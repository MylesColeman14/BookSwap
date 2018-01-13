console.log("htmlRouter R")

const express = require('express');
const bodyParser = require('body-parser');

const db = require("../../models");

const Sequelize = require('sequelize');
const Op = Sequelize.Op
// const connection = require('./connection.js');

const app = express();

var htmlRouter = express.Router();
htmlRouter.use(bodyParser.urlencoded({ extended: false }));
htmlRouter.use(bodyParser.json());
htmlRouter.route('/')

  .get((req, res, next) => {
    console.log(req.body);
    
    db.Sale.findAll({
        where: {
          sold: false
        },
        // include: [db.Book]
      })
      .then((dbSale) => {
        res.render("index", { books: dbSale });
        // res.json(dbSale);
      });

  })

  .post((req, res, next) => {
  console.log("req.body", req.body);
  var saleE =  req.body.email
  var saleP =  req.body.asking_price
  // console.log(req.body.burger_name)
  db.Sale.create({
      // include:[db.Book],
      
      sell_email:req.body.email,
      asking_price: req.body.asking_price,
      title: req.body.title,
      author: req.body.author,
      isbn: req.body.isbn
      
      
//   }).then ((saleE, saleP, req, res, next) => {
// console.log(saleE)
//     db.Sale.create({
//       sell_email:saleE,
//       asking_price: saleP
//     })
  })
  .then((dbSale) => {
    
          res.redirect("/");
  });
  // Test it
  // return res.send('You sent, ' + req.body.task);

     // connection.query("INSERT INTO books (title, author, isbn) VALUES (?,?,?)", [req.body.title, req.body.author, req.body.isbn], function(err, result) {
  //   if (err) throw err;
        //console.log(result);
      // });
      // res.json(req.body)
      // res.redirect("/");
  });
module.exports = htmlRouter