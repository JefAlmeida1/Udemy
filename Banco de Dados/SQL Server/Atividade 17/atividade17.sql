select ProductID, avg(OrderQty) as "media"
from Sales.SalesOrderDetail
group by ProductID;