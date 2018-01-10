var booksList = [];

function getBookDetailsISBN() {
    let isbn = $("#searchISBN").val().trim(); 
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
function callback(x) {
    event.preventDefault();
    //do things with your data here
    //console.log("\n" + x.items[0].volumeInfo.imageLinks.thumbnail)
    console.log("\n" + x.items[0].volumeInfo.title)
    $('.bookGrid').append("<div>" + x.items[0].volumeInfo.title);

    if(x.items[i].volumeInfo.imageLinks != undefined){
        console.log(x.items[i].volumeInfo.imageLinks.thumbnail);
        $('.bookGrid').append("<img src='"+x.items[i].volumeInfo.imageLinks.thumbnail +"'>");
    }else{
        console.log("No image found")
    }

    if(x.items[i].volumeInfo.authors != undefined){
        for(k=0; k<x.items[i].volumeInfo.authors.length; k++){
            console.log(x.items[i].volumeInfo.authors[k])
            $('.bookGrid').append(x.items[i].volumeInfo.authors[k]);

        }
    }else{
        console.log("authors unknown")
    }

    if(x.items[i].volumeInfo.industryIdentifiers != undefined){
        for(k=0;k<x.items[i].volumeInfo.industryIdentifiers.length;k++){
            console.log(x.items[i].volumeInfo.industryIdentifiers[k])
        }
        $('.bookGrid').append(x.items[i].volumeInfo.industryIdentifiers[0].identifier +"</div>");
    }else{
        console.log("No isbn avalible")
        $('.bookGrid').append("</div>");
    }   
}


function getBookDetailsTitle() {
    let title = $("#searchTitle").val().trim();
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
function callback(x) {
    console.log(x)
    for(i=0;i<x.items.length;i++){
        //logging title of book
        console.log("\n" + x.items[i].volumeInfo.title)
        $('.bookGrid').append("<div>" + x.items[0].volumeInfo.title); 

        if(x.items[i].volumeInfo.imageLinks != undefined){
            console.log(x.items[i].volumeInfo.imageLinks.thumbnail)
            $('.bookGrid').append("<img src='"+x.items[i].volumeInfo.imageLinks.thumbnail +"'>");
        }else{
            console.log("No image found")
        }

        if(x.items[i].volumeInfo.authors != undefined){
            for(k=0; k<x.items[i].volumeInfo.authors.length; k++){
                console.log(x.items[i].volumeInfo.authors[k])
                $('.bookGrid').append(x.items[i].volumeInfo.authors[k]);
            }
        }else{
            console.log("authors unknown")
        }

        if(x.items[i].volumeInfo.industryIdentifiers != undefined){
            for(k=0;k<x.items[i].volumeInfo.industryIdentifiers.length;k++){
                console.log(x.items[i].volumeInfo.industryIdentifiers[k])
            }
            $('.bookGrid').append(x.items[i].volumeInfo.industryIdentifiers[0].identifier +"</div>");
        }else{
            console.log("No isbn avalible");
            $('.bookGrid').append("</div>");
        }   
    }

    
}


function getBookDetailsAuthor() {
    let author = $("#searchAuthor").val().trim(); 
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
        $('.bookGrid').append("<div>" + x.items[0].volumeInfo.title); 

        //logging Picture of book
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
        
       
        //logging image of book
        if(x.items[i].volumeInfo.imageLinks != undefined){
            console.log(x.items[i].volumeInfo.imageLinks.thumbnail)
            $('.bookGrid').append("<img src='"+x.items[i].volumeInfo.imageLinks.thumbnail +"'>");
        }else{
            console.log("No image found")
        }

        if(x.items[i].volumeInfo.industryIdentifiers != undefined){
            for(k=0;k<x.items[i].volumeInfo.industryIdentifiers.length;k++){
                console.log(x.items[i].volumeInfo.industryIdentifiers[k])
            }
            $('.bookGrid').append(x.items[i].volumeInfo.industryIdentifiers[0].identifier +"</div>");
        }else{
            console.log("No isbn avalible")
            $('.bookGrid').append("</div>");
        }   
    }
}

$(document).on("click", "#isbnSearchButton", getBookDetailsISBN);
$(document).on("click", "#titleSearchButton", getBookDetailsTitle);
$(document).on("click", "#authorSearchButton", getBookDetailsAuthor);
