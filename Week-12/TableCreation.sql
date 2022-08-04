show databases;
create database pesto_warehouse;
use pesto_warehouse;

create table Cities(
	Cid integer primary key,
	City varchar(20) NOT NULL,
    State varchar(20) NOT NULL
);

create table Warehouses(
	Wid integer,
    Wname varchar(30),
    Location varchar(20),
    ExtraContext json,
    Cityid integer references Cities(Cid),
    primary key(Wid)
);

create table Stores(
	Sid integer,
    Wid integer references Warehouses(Wid),
    Store_name varchar(20),
    Location_city varchar(20),
    primary key(Sid)
);

create table Customer(
	Cno integer,
    Cname varchar(50),
    Addr varchar(50),
    Cu_city varchar(20),
    primary key(Cno)
);

create table Orders(
	Ono integer,
    Odate date,
    Itemno integer references Items(Itemno),
    Cno integer references Customer(Cno),
	primary key(Ono)
);

create table Items(
	Itemno integer,
    Item_description text,
    Weight decimal(5,2),
    Cost decimal(5,2),
    primary key(Itemno)
);
show tables;

