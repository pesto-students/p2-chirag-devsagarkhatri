## Queries are done here
#------------------------#

use pesto_warehouse;

#Find item that has minimum weight
select itemno, weight from pesto_warehouse.items where weight=min(weight);

#QUESTION 1 : Find different Warehouses in Pune
select * from warehouses where cities_id = (select cityid from cities where city = "Pune");

#QUESTION 2 : Find the details of items ordered by customer "Mr.Patil"
select * from pesto_warehouse.items inner join pesto_warehouse.orders on items.id = orders.id
inner join pesto_warehouse.customer on customer.id = orders.CustomerId
where Customer.name = "Mr.Patil";

#QUESTION 3 : Find a Warehouse which has maximum stores.
select Wname from pesto_warehouse.warehouses where 
Wid = (select max(count(Wid)) from pesto_warehouse.stores group by Wid);

#QUESTION 4 : Find an item which is ordered for a minimum number of times.
select item_description from pesto_warehouse.items where itemno = 
(Select min(count(itemno)) from pesto_warehouse.orders group by itemno);

#QUESTION 5 : Find the detailed orders given by each customer
select * from pesto_warehouse.customer join pesto_warehouse.orders
on customer.cno = orders.cno order by customer.cname;