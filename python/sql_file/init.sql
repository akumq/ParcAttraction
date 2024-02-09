DROP TABLE IF EXISTS attraction;

CREATE TABLE attraction (
    attraction_id int auto_increment,
    primary key(attraction_id),
    nom varchar(255) not null,
    description varchar(255) not null,
    difficulte int,
    visible bool default true
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    users_id int auto_increment,
    primary key(users_id),
    name varchar(255) not null,
    password varchar(255) not null
);

DROP TABLE IF EXISTS critique;

CREATE TABLE critique (
    critique_id int auto_increment,
    primary key(critique_id),
    attraction_id int,
    foreign key(attraction_id) REFERENCES attraction(attraction_id),
    text nvarchar(3000) not null,
    name varchar(255) not null,
    surname varchar(255) not null,
    score int not null
);
