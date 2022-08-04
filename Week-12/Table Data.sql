use pesto_warehouse;

insert into Cities(Cid,City,State) values 
(8001,"Bilaspur","Himachal"),
(8002,"Chamba","Himachal"),
(8003,"Dalhousie","Himachal"),
(8004,"Hamirpur","Himachal"),
(8005,"Kangra","Himachal"),
(8006,"Kullu","Himachal"),
(8007,"Mandi","Himachal"),
(8009,"Nahan","Himachal"),
(8010,"Shimla","Himachal");


insert into pesto_warehouse.warehouses(Wid,Wname,Location,Cityid) values
(800201,"Kalatop","Chamba",8002),
(800202,"Chamera Dham","Chamba",8002),
(800203,"Mani Mahesh","Chamba",8002),
(800204,"Rang Mahal","Chamba",8002),
(800101,"Bhakra Nangal","Bilaspur",8001),
(800102,"Govind Sagar","Bilaspur",8001),
(800103,"Sri Naina Devi","Bilaspur",8001),
(800104,"Vyas Caves","Bilaspur",8001);



insert into pesto_warehouse.stores(Sid,Wid,Store_name,Location_City) values
(11201,800101,"Ramesh Stores","Bilaspur"),
(11202,800101,"Mahesh Stores","Bilaspur"),
(11203,800101,"Suresh Stores","Bilaspur"),
(11204,800101,"Jitesh Stores","Bilaspur"),
(11205,800101,"Dinesh Stores","Bilaspur"),
(11206,800102,"Ramesh Stores","Bilaspur"),
(11207,800102,"Mahesh Stores","Bilaspur"),
(11208,800102,"Suresh Stores","Bilaspur"),
(11209,800102,"Jitesh Stores","Bilaspur"),
(11210,800102,"Dinesh Stores","Bilaspur"),
(11311,800202,"Ramesh Stores","Chamba"),
(11312,800201,"Mahesh Stores","Chamba"),
(11313,800201,"Suresh Stores","Chamba"),
(11314,800201,"Jitesh Stores","Chamba"),
(11315,800201,"Dinesh Stores","Chamba");


insert into pesto_warehouse.customer(Cno,Cname,Addr,Cu_city) values
(101,"Ramesh Kumar","Bilaspur","Bilaspur"),
(102,"Rajesh Kumar","Bilaspur","Bilaspur"),
(103,"Dinesh Kumar","Bilaspur","Bilaspur");
