$(function() {

  var newBook = $("#submitNewBook");

  function deleteTodo(event) {
    event.stopPropagation();
    var id = $(this).data("id");
    //   $.ajax({
    //     method: "DELETE",
    //     url: "/api/todos/" + id
    //   }).done(getTodos);
    // }
  }

  var addBook = () => {

  var isbn = $('#ISBN').val();
  var sellerEmail = $('#sellerEmail').val();
  var askingPrice = $('#askingPrice').val();

   // var xmlhttp = new XMLHttpRequest();
   //  var url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn;
   //  xmlhttp.onreadystatechange = function() {
   //      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
   //          var x = JSON.parse(xmlhttp.responseText);
   //          callback(x);
   //      }
   //  };
   //  xmlhttp.open("GET", url, true);
   //  xmlhttp.send();


    axios.post('/', {
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

  $(document).on("click", newBook ,addBook);
  });