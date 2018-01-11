
INSERT INTO books (title, author, isbn) VALUES ('PHP and MYSQL Web Devlopment', 'Willing', '0321833899');
INSERT INTO books (title, author, isbn) VALUES ('JavaScript Bible', 'Goodman', '0764547186');
INSERT INTO books (title, author, isbn) VALUES ('Introduction to Probability and Statistics', 'Mendenhall', '1133103758');

INSERT INTO users ( email) VALUES ('test@gmail.com');

INSERT INTO sales (user_id , book_id, asking_price, sold) VALUES ('1','1','20',false);
INSERT INTO sales (user_id , book_id, asking_price, sold) VALUES ('1','2','80',false);
INSERT INTO sales (user_id , book_id, asking_price, sold) VALUES ('1','3','40',false);