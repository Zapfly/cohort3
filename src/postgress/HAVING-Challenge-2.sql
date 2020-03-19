SELECT rating, round(AVG(rental_duration))
FROM film
GROUP BY rating
HAVING AVG(rental_duration) > 5;