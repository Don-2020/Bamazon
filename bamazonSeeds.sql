DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE  products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department VARCHAR(50) NULL,
  price DECIMAL(10, 2),
  stock_quantity INTEGER(10),
  PRIMARY KEY (id)
);


INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("HP Spectre", "Electronic", 1500, 50);

INSERT INTO products (product_name, department, price, stock_quantity)VALUES ("PS4", "Gaming", 436.99, 20);

INSERT INTO products (product_name, department, price, stock_quantity)VALUES ("Space Jam 11", "Clothing", 430, 4);

INSERT INTO products (product_name, department, price, stock_quantity)VALUES("N3XT L3V3L","Clothing",180, 10);

INSERT INTO products (product_name, department, price, stock_quantity)VALUES ("Xbox One", "Gaming", 362, 25);

INSERT INTO products (product_name, department, price, stock_quantity)VALUES ("Wii", "Gaming", 226.58, 11);

INSERT INTO products (product_name, department, price, stock_quantity)VALUES ("MacBook Pro", "Electronic", 2799, 15);

INSERT INTO products (product_name, department, price, stock_quantity)VALUES ("Surface Book 2 ", "Electronic", 1049, 30);

INSERT INTO products (product_name, department, price, stock_quantity)VALUES ("IPad Pro", "Electronic", 80, 40);

INSERT INTO products (product_name, department, price, stock_quantity)VALUES ("Razer Blade 15", "Gaming", 1999.99, 100);
