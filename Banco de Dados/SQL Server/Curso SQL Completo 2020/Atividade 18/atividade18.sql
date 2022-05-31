select top 10 LineTotal, sum(LineTotal) as "Vendas"
from Sales.SalesOrderDetail
group by LineTotal
order by sum(LineTotal) desc;