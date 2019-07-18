DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE  products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  departmentName VARCHAR(50) NULL,
  price INTEGER(10),
  stock_quantity INTEGER(10),
  PRIMARY KEY (id)
);


INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("HP Spectre", "HP", 1500, 150);

INSERT INTO products (product_name, department, price, stock_quantity)VALUES ("PS4", "Sony", 436, 80);

INSERT INTO products (product_name, department, price, stock_quantity)VALUES ("Space Jam 11", "Nike", 430, 64);

INSERT INTO products (product_name, department, price, stock_quantity)VALUES("N3XT L3V3L","Adidas",180, 100);

INSERT INTO products (product_name, department, price, stock_quantity)VALUES ("Xbox One", "Microsoft", 362, 50);

INSERT INTO products (product_name, department, price, stock_quantity)VALUES ("Wii", "Nintendo", 226, 80);

INSERT INTO products (product_name, department, price, stock_quantity)VALUES ("MacBook Pro", "Apple", 2799, 150);

INSERT INTO products (product_name, department, price, stock_quantity)VALUES ("Surface Book 2 ", "Microsoft", 1049, 40);

INSERT INTO products (product_name, department, price, stock_quantity)VALUES ("IPad Pro", "Apple", 649, 40);

INSERT INTO products (product_name, department, price, stock_quantity)VALUES ("Razer Blade 15", "Razer", 1999, 100);
