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
        include: [db.Book]
      })
      .then((dbSale) => {
        console.log(dbSale)
        console.log(db.Sale[0])
        res.render("index", { books: dbSale });
        // res.json(dbSale);
      });

  })

  //    
  .post((req, res, next) => {
    // Test it
    // console.log('You sent, ' + req.body.task);
    console.log("req.body", req.body)
    // console.log(req.body.burger_name)

    // Test it
    // return res.send('You sent, ' + req.body.task);

    // connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
    //   if (err) throw err;
    // });
    res.redirect("/");
  });
module.exports = htmlRouter
