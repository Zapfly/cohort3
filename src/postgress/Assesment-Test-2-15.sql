SELECT starttime, cd.bookings.memid, cd.members.firstname, cd.members.surname
FROM cd.bookings
INNER JOIN cd.members ON cd.members.memid = cd.bookings.memid
WHERE firstname = 'David' AND surname = 'Farrell'