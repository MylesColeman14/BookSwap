DROP DATABASE IF EXISTS text_bookDB;

CREATE DATABASE text_bookDB;

USE text_bookDB;

CREATE TABLE users (
 id INT NOT NULL AUTO_INCREMENT,
 email VARCHAR (255) NULL,
 PRIMARY KEY (id)
 );
 
 CREATE TABLE books (
	id INT NOT NULL AUTO_INCREMENT,
	title  VARCHAR(255) NOT NULL,
	author VARCHAR(255) NULL,
	isbn varchar(13) NOT NULL,
 PRIMARY KEY (id)
);

CREATE TABLE sales (
	id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    book_id INT NOT NULL,
	asking_price DECIMAL(10,2) NOT NULL,  
	sold boolean not null default 0,
     PRIMARY KEY (id),
     FOREIGN KEY (user_id) REFERENCES users (id),
     FOREIGN KEY (book_id) REFERENCES books (id)
);

