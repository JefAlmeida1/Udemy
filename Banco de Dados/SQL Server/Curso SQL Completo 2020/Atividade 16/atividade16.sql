select MiddleName, count (*)  as "soma"
from Person.Person
group by MiddleName