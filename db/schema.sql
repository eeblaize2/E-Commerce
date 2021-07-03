-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- CREATE TABLES
CREATE TABLE Category (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(20) NOT NULL
);

CREATE TABLE Product (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(20) NOT NULL,
    price decimal (10,2) NOT NULL CHECK (price > 0), -- Validates that the value is a decimal. XXXXXX
    stock INTEGER NOT NULL default 10, -- Validates that the value is numeric. XXXXXX
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES Category(id)
)
















Tag


id


Integer.


Doesn't allow null values.


Set as primary key.


Uses auto increment.




tag_name

String.





ProductTag


id


Integer.


Doesn't allow null values.


Set as primary key.


Uses auto increment.




product_id


Integer.


References the Product model's id.




tag_id


Integer.


References the Tag model's id.