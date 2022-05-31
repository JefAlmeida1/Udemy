select Productid, count(productid) "contagem",
avg(orderqty) as "media"
from Production.WorkOrder
group by ProductID;