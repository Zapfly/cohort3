SELECT staff_id, SUM(amount), COUNT(*)
FROM payment
GROUP BY staff_id;