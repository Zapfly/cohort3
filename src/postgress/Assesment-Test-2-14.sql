SELECT 
cd.facilities.facid, name, starttime AS start
FROM cd.facilities
INNER JOIN cd.bookings ON cd.facilities.facid = cd.bookings.facid
WHERE cd.facilities.facid IN (0, 1) 
AND start BETWEEN '2012-09-21' AND '2012-09-22'
ORDER BY starttime ASC;
