console.log("htmlRouter R")

const express = require('express');
const bodyParser = require('body-parser');

const db = require("../../models/index.js");

const Sequelize = require('sequelize');
const Op = Sequelize.Op
// const connection = require('./connection.js');

const app = express();

var htmlRouter = express.Router();
htmlRouter.use(bodyParser.urlencoded({ extended: false }));
htmlRouter.use(bodyParser.json());
htmlRouter.route('/')

  .get((req, res, next) => {
    db.Sale.findAll({
      // where: {
      //   [Op.col]: 'Book.id'
      // },
      include: [
        db.Book
      ]
    })
    .then((err, data) => {
      if (err) throw err;
      console.log(data)
      res.render("index", { books: data });
      // res.send(data);
    })
  })
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
