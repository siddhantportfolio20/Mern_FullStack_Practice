-- Create table users(
--     id serial,
--     name VARCHAR(50),
--     email VARCHAR(100), 
--     role VARCHAR(150) DEFAULT 'user',
--     created_at TIMESTAMP DEFAULT now()
-- )

-- insert into users (name,email) values ('siddhant' , 'siddhant@gmail.com');

-- select * from users; 

-- select name , role from users; 


-- to displaying the data as soon as you insert it into the table 

-- insert into users (name,email) values ('sourish' , 'sourish@gmail.com')
-- returning id , name,created_at;


-- insert into users (name,email) values ('Suraj' , 'suraj@gmail.com'),
-- ('sachin' , 'sachin@gmail.com'),
-- ('rupali' , 'rupali@gmail.com')
-- returning id , name,created_at,email;


-- where statement

-- select * from users where id = 1;
-- select name from users where role = 'user';

-- --  update the table 
-- update users set role = 'manager' where id = 2;

-- select * from users ;

-- update users set role = 'manager' where id = 3
-- returning name , role


-- delete from users where id = 6;
-- delete from users where id = 1;


-- alter commands 

-- alter table users add column age integer default 1;

-- select * from users order by id desc;


-- --  top 3 candidates 
-- select * from users order by id asc limit 3;


-- --  bottom 3 candidates 
-- select * from users order by id desc limit 3;


-- update users set name = 'Siddhant' , age = 23 where id = 2;

-- -- case sensitive checking 
-- select * from users where name like 'Siddhant';

-- -- case insensitive checking
-- select * from users where name ilike 'siddhant';


-- s at the begining
select * from users where name ilike 's%' ;

-- ends with t 
select * from users where name ilike '%t' ;


-- checks for 'r' anywhere on name (works like includes statement in js)
select * from users where name ilike '%s%' ;

-- second letter is 'a'
select * from users where name ilike '_a%' ;
