create table users(
    id SERIAL PRIMARY KEY,
    name varchar(50),
    username varchar(50)
);

create table videos(
    id SERIAL PRIMARY KEY,
    title varchar(50),
    info varchar(50),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users (id)
);