select p.id as post_id, title, content, img, profile_pic, date_created, username as author_username from helo_posts p
join helo_users u on u.id = p.author_id
where lower(title) like $1 and u.id != $2
order by date_created desc;


--SELECT post id, title, content, img, profile_pic, date_created, username as author_username from helo_posts
--join helo_users on helo_users.id not equal to helo_posts.author_id
-- where lowercase everything is like the first value inserted
--and show them by the oldest date first.