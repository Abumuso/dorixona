CREATE DATABASE dorixonaDB;
USE dorixonaDB;

CREATE TABLE regions (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE districts (
    id INT PRIMARY KEY auto_increment,
    name VARCHAR(50),
    region_id INT NOT NULL
);

CREATE TABLE pharmacies (
    id INT PRIMARY KEY auto_increment,
    name VARCHAR(64) NOT NULL,
    address VARCHAR(64) NOT NULL,
    location VARCHAR(64) NOT NULL,
    phone VARCHAR(32) NOT NULL,
    email VARCHAR(32) NOT NULL,
    region_id INT NOT NULL,
    district_id INT NOT NULL
);

CREATE TABLE stock (
    id INT PRIMARY KEY auto_increment,
    pharmacy_id INT NOT NULL,
    medicine_id INT NOT NULL,
    quantity INT NOT NULL
);

CREATE TABLE medicines (
    id INT PRIMARY KEY auto_increment,
    name VARCHAR(64) NOT NULL,
    manufacturer VARCHAR(64),
    medicine_type_id INT NOT NULL,
    price FLOAT,
    expiryDate VARCHAR(64),
    info VARCHAR(255)
);

CREATE TABLE medicinetype(
    id INT PRIMARY KEY auto_increment,
    name VARCHAR(64)
);