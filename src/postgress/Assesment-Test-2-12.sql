SELECT facid, SUM(slots) FROM cd.bookings
GROUP BY facid
ORDER BY SUM(slots) ASC