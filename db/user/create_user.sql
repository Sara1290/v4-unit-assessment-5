-- INSERT INTO helo_users (username, password, profile_pic)
-- VALUES
-- ('LindaB', 'burgah', 'familyPic')
-- ('BobB', 'burgerchamp', 'meatsiahPic'),
-- ('Gene', 'beefsquatch', 'selfiePic')
-- returning *;

INSERT INTO helo_users (username, password, profile_pic)
VALUES
($1, $2, $3)
returning *;
