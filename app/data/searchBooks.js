function getBookDetailsISBN(isbn) {
    isbn = $("#searchISBN").val().trim(); 
    var xmlhttp = new XMLHttpRequest();
    var url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn;

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var x = JSON.parse(xmlhttp.responseText);
            callback(x);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getBookDetailsTitle(title) {
    title = $("#searchTitle").val().trim();
    var xmlhttp = new XMLHttpRequest();
    var url = "https://www.googleapis.com/books/v1/volumes?q=title:" + title;

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var x = JSON.parse(xmlhttp.responseText);
            callback(x);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getBookDetailsAuthor(author) {
    author = $("#searchAuthor").val().trim(); 
    var xmlhttp = new XMLHttpRequest();
    var url = "https://www.googleapis.com/books/v1/volumes?q=author:" + author;

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var x = JSON.parse(xmlhttp.responseText);
            callback(x);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


function callback(x) {
    //do things with your data here
    console.log(x);
    for(i=0;i<x.items.length;i++){
        //logging title of book
        console.log("\n" + x.items[i].volumeInfo.title)
        var postedBook = document.createElement("div");
        $(postedBook).append(x.items[i].volumeInfo.title); 

        if(x.items[i].volumeInfo.imageLinks != undefined){
            console.log(x.items[i].volumeInfo.imageLinks.thumbnail)
            $('.bookGrid').append("<img src='"+x.items[i].volumeInfo.imageLinks.thumbnail +"'>");
        }else{
            console.log("No image found")
        }

        //logging author of book
        if(x.items[i].volumeInfo.authors != undefined){
            for(k=0; k<x.items[i].volumeInfo.authors.length; k++){
                console.log(x.items[i].volumeInfo.authors[k])
                $('.bookGrid').append(x.items[i].volumeInfo.authors[k]);
            } 
        }else{
            console.log("no authors found")
        }
        
        if(x.items[i].volumeInfo.industryIdentifiers != undefined){
            for(k=0;k<x.items[i].volumeInfo.industryIdentifiers.length;k++){
                console.log(x.items[i].volumeInfo.industryIdentifiers[k] )
            }
            $(postedBook).append(x.items[i].volumeInfo.industryIdentifiers[0].identifier);
        }else{
            console.log("No isbn avalible");

        }   

        $('.bookGrid').append(postedBook)
    }
}





$(document).on("click", "#isbnSearchButton", getBookDetailsISBN);
$(document).on("click", "#titleSearchButton", getBookDetailsTitle);
$(document).on("click", "#authorSearchButton", getBookDetailsAuthor);

$(document).on("click", "#submitNewBook", addNewBook);

