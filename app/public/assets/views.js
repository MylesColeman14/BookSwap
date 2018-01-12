  // var xmlhttp = new XMLHttpRequest();
  // var url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn;
  // xmlhttp.onreadystatechange = function() {
  //   if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
  //     var x = JSON.parse(xmlhttp.responseText);
  //       for(i=0;i<x.items.length;i++){
  //       //logging title of book
    
  //   bookTitle = x.items[i].volumeInfo.title;
  //   console.log(x.items[i].volumeInfo.title); 
  //   if(x.items[i].volumeInfo.imageLinks != undefined){
  //       console.log(x.items[i].volumeInfo.imageLinks.thumbnail);
  //        imageURL = x.items[i].volumeInfo.imageLinks.thumbnail;
  //   }else{
  //       console.log("No image found")
  //   }
  //   //logging author of book
  //   if(x.items[i].volumeInfo.authors != undefined){
  //     console.log(x.items[i].volumeInfo.authors[0])
  //     bookAuthors = x.items[i].volumeInfo.authors[0];
  //   }else{
  //       console.log("authors unknown")
  //   }
  //   if(x.items[i].volumeInfo.industryIdentifiers != undefined){
  //     console.log(x.items[i].volumeInfo.industryIdentifiers[0])
  //     bookISBN = x.items[i].volumeInfo.industryIdentifiers[0].identifier
  //   }else{
  //       console.log("No isbn avalible");
  //   }   
  // }
  //   }
  // };
  // xmlhttp.open("GET", url, true);
  // xmlhttp.send();

  
  // //do things with your data here
  // console.log(x);
 
  // axios.post('/', {
  //     title: bookTitle,
  //     author: bookAuthors,
  //     thumbnail: imageURL,
  //     isbn: bookISBN,
  //     email: sellerEmail,
  //     asking_price: askingPrice
  //   })
  //   .then(function(response) {
  //     console.log(`response ${{response}}`);
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });
  // }
    // axios.post('/api/books', {
    //     isbn: isbn,
    //     email: sellerEmail,
    //     asking_price: askingPrice
    //   })
    //   .then(function(response) {
    //     console.log(`response ${{response}}`);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  

  

  // var updateBurger = (burger) => {
  //   // UPDATE `burgers_db`.`burgers` SET `devoured`='1' WHERE `id`='1';
  //   console.log("before axios")
  //   console.log(burger)
  //   //  axios.put('/save', {
  //   //    data: burger
  //   //  })
  //   $.ajax({
  //       url: '/update',
  //       type: 'PUT',
  //       data: { id: burger },
  //     })
  //     .done(function() {
  //       console.log("success");
  //     })
  //     .fail(function() {
  //       console.log("error");
  //     })
  //     .always(function() {
  //       console.log("complete");
  //     });

  //   // $.ajax({
  //   //  url:'/update',
  //   //  type: 'PUT',
  //   //  data: burger
  //   // })
  //   // .done((response)=>{
  //   //  console.log("test");
  //   // })
  // }

  // function toggleComplete(event) {
  //   var burger = $(this).parent().data("burger");
  //   console.log("burger" + burger)
  //   updateBurger(burger);
  // }


function apiWork(isbn,sellerEmail,askingPrice){
  var bookTitle;
  var imageURL;
  var bookAuthors;


  var xmlhttp = new XMLHttpRequest();
  var url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn;
  xmlhttp.onreadystatechange = function() {
    console.log(xmlhttp.readyState + " " +  xmlhttp.status )
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var x = JSON.parse(xmlhttp.responseText);
        for (i = 0; i < x.items.length; i++) {
          //logging title of book
          console.log(x.items[i].volumeInfo.title)
          bookTitle = x.items[i].volumeInfo.title;
          if (x.items[i].volumeInfo.imageLinks != undefined) {
            console.log(x.items[i].volumeInfo.imageLinks.thumbnail)
            imageURL = x.items[i].volumeInfo.imageLinks.thumbnail;
          }else {
            console.log("No image found")
          }
          //logging author of book
          if (x.items[i].volumeInfo.authors != undefined) { 
            console.log(x.items[i].volumeInfo.authors[0]);
            bookAuthors = x.items[i].volumeInfo.authors[0];
          }else {
            console.log("authors unknown")
          }
          if (x.items[i].volumeInfo.industryIdentifiers != undefined) {
            console.log(x.items[i].volumeInfo.industryIdentifiers[0].identifier);
            isbn = x.items[i].volumeInfo.industryIdentifiers[0].identifier;
          }
        }
        postIt(bookTitle, isbn, bookAuthors,imageURL,sellerEmail, askingPrice);
      }else{
        console.log("help me pls");
      }

    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  
}

function postIt(bookTitle, isbn, bookAuthors, imageURL, sellerEmail, askingPrice){
  
     axios.post('/', {
      title: bookTitle,
      author: bookAuthors,
      thumbnail: imageURL,
      isbn: isbn,
      email: sellerEmail,
      asking_price: askingPrice
    })
    .then(function(response) {
      console.log(`response ${{response}}`);
    })
    .catch(function(error) {
      console.log(error);
    });
}

$(document).on("click", "#submitNewBook", function(){


  var isbn = $('#ISBN').val();
  var sellerEmail = $('#sellerEmail').val();
  var askingPrice = $('#askingPrice').val();
  var bookTitle = $('#Title').val();
  var bookAuthors = $("#Author").val();
  var imageURL = "something in here";

apiWork(isbn, sellerEmail, askingPrice);
  
   


  });
 