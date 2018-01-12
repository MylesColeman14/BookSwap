console.log("apiRoute R");

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const apiRouter = express.Router();

apiRouter.route('/')
// function to be used
.get((req, res, next) => {
  // connection.query("SELECT * FROM books;", (err, data) => {
  //   if (err) throw err;
  //   console.log(data)
  //   // Test it
  //   // console.log('The solution is: ', data);

  //   // Test it
  //   // return res.send(data);

  //   res.render("index", { burgers: data });
  // });
  console.log("apiget")
      res.render("index", { burgers: data });
})
 .put((req, res, next) => {
  console.log("apiput")
 })

// Post route -> back to home
.post((req, res)=> {
  // Test it
  // console.log('You sent, ' + req.body.task);
  console.log("req.body", req.body)
  console.log(req.body.burger_name)

  // Test it
  // return res.send('You sent, ' + req.body.task);

  // connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
  //   if (err) throw err;
  // });
  res.redirect("/");
});


// // app.delete("/", (req, res) => {
// //   connection.query("")
// // })

// app.put("/update", (req, res) => {
//   // UPDATE `burgers_db`.`burgers` SET `devoured`='1' WHERE `id`='1';
//   console.log(req.body.id)
//   console.log("MKAE")
//   connection.query("UPDATE burgers_db.burgers SET devoured=1 WHERE id=?", [req.body.id], function(err, result) {
//     if (err) throw err;
//   })
//   res.redirect(303, '/')
// })
// ======================================

module.exports = apiRouter
