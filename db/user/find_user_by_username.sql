-- SELECT * FROM helo_users
-- WHERE username ILIKE 'lindaB';

SELECT * FROM helo_users
WHERE username = $1;