SELECT rating, ROUND(AVG(replacement_cost),2)
FROM film
GROUP BY rating