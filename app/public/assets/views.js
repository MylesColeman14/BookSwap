$(function() {
  function apiWork(isbn, sellerEmail, askingPrice) {
    var bookTitle;
    var imageURL;
    var bookAuthors;


    var xmlhttp = new XMLHttpRequest();
    var url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn;
    xmlhttp.onreadystatechange = function() {
      console.log(xmlhttp.readyState + " " + xmlhttp.status)
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var x = JSON.parse(xmlhttp.responseText);
        for (i = 0; i < x.items.length; i++) {
          //logging title of book
          console.log(x.items[i].volumeInfo.title)
          bookTitle = x.items[i].volumeInfo.title;
          if (x.items[i].volumeInfo.imageLinks != undefined) {
            console.log(x.items[i].volumeInfo.imageLinks.thumbnail)
            imageURL = x.items[i].volumeInfo.imageLinks.thumbnail;
          } else {
            console.log("No image found")
          }
          //logging author of book
          if (x.items[i].volumeInfo.authors != undefined) {
            console.log(x.items[i].volumeInfo.authors[0]);
            bookAuthors = x.items[i].volumeInfo.authors[0];
          } else {
            console.log("authors unknown")
          }
          if (x.items[i].volumeInfo.industryIdentifiers != undefined) {
            console.log(x.items[i].volumeInfo.industryIdentifiers[0].identifier);
            isbn = x.items[i].volumeInfo.industryIdentifiers[0].identifier;
          }
        }
        postIt(bookTitle, isbn, bookAuthors, imageURL, sellerEmail, askingPrice);
      } else {
        console.log("help me pls");
      }

    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

  }

  function postIt(bookTitle, isbn, bookAuthors, imageURL, sellerEmail, askingPrice) {

    axios.post('/', {
        title: bookTitle,
        author: bookAuthors,
        thumbnail: imageURL,
        isbn: isbn,
        email: sellerEmail,
        asking_price: askingPrice
      })
      .then(function(response) {
        console.log("res"+response );
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  $(document).on("click", "#submitNewBook", function() {


    var isbn = $('#ISBN').val();
    var sellerEmail = $('#sellerEmail').val();
    var askingPrice = $('#askingPrice').val();
    var bookTitle = $('#Title').val();
    var bookAuthors = $("#Author").val();
    var imageURL = "something in here";

    apiWork(isbn, sellerEmail, askingPrice);






    // $(document).on("click", newBook, addBook);
  });
});
