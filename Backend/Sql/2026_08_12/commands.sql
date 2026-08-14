-- CREATE TABLE students (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(50) NOT NULL,
--     age INT CHECK (age >= 16),
--     email VARCHAR(100) UNIQUE,
--     city VARCHAR(50)
--     );

-- CREATE TABLE courses (
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(100) NOT NULL,
--     duration_weeks INT NOT NULL,
--     fee DECIMAL(8,2) NOT NULL
-- );

-- CREATE TABLE enrollments (
--     id SERIAL PRIMARY KEY,
--     student_id INT NOT NULL,
--     course_id INT NOT NULL,
--     enrollment_date DATE,
--     FOREIGN KEY (student_id) REFERENCES students(id),
--     FOREIGN KEY (course_id) REFERENCES courses(id)
-- );


-- INSERT INTO students (name, age, email, city) VALUES
-- ('Aarav', 19, 'aarav@example.com', 'Pune'),
-- ('Meera', 20, 'meera@example.com', 'Mumbai'),
-- ('Riya', 18, 'riya@example.com', 'Nashik'),
-- ('Kabir', 21, 'kabir@example.com', 'Pune'),
--  ('Sara', 22, 'sara@example.com', 'Nagpur');

--  INSERT INTO courses (title, duration_weeks, fee) VALUES
--  ('SQL Basics', 6, 2500.00),
--  ('Web Development', 10, 5000.00),
--  ('Python Fundamentals', 8, 4000.00);

--  INSERT INTO enrollments (student_id, course_id, enrollment_date) VALUES
--  (1, 1, '2026-05-01'), (1, 2, '2026-05-03'), (2, 1, '2026-05-04'), (3, 3, '2026-05-05');

-- select * from students;
-- select * from courses;
-- select * from enrollments;



-- 1. find students from pune 
    select * from students where city ilike 'pune';

-- 2. find students aged 20 or above 
    select * from students where age >= 20 ;

-- 3. find courses with fees less than 5000
    select * from courses where fee < 5000;

-- 4. find students from mumbai and pune 
    select * from students where city ilike 'pune' or city ilike 'mumbai';

-- 5. show students orders by age ascending 
    select * from students order by age asc;

-- 6. show youngest student 
    select * from students order by age asc limit 1;

-- 7. show 2  most expensive courses 
    select * from courses order by fee desc limit 2;
-- 8. change kabir's city to delhi 
    update students set city = 'delhi' where name = 'Kabir';
    select * from students;
-- 9. change fees of sql basics to 3000
    update courses set fee = 3000 where title = 'SQL Basics';
    select * from courses;

-- 10. increase meera's age to 21 
    update students set age = 21 where name ilike 'Meera';
    select * from students ;

-- 11. delete student with id 5
--    delete from students where id = 5 ;

-- -- 12. delete all student from nashik
--     delete from students where city ilike 'nashik';
-- -- 13. delete all courses with fee above 6000
--     delete from courses where fee > 6000;


-- 14. first sorting will be done using city name and if the city is same the sorting will be done according to age 

select * from students order by city asc , age desc;

select * from students;
select * from courses;



-- joins 

-- inner join only gives the common records between user and posts 
-- ie. if user_id is null in posts table it will not included 
-- this give only the common records between user and posts 
select posts.title , user.name as author ;
from posts INNER JOIN users on posts.user_id = user.id;


-- this give all records in posts and common in users 
select posts.title , users.name as author 
from posts LEFT JOIN users on posts.user_id = user.id;


-- this give all the records in users and common in posts 
select posts.title , users.name as author 
from posts RIGHT JOIN users on posts.user_id = user.id;


select users.name,count(posts.id) as post_count
from users left JOIN posts on posts.user_id = user.id 
group by user.id , users.name; 