create table task(
    id serial primary key,
    title varchar(255) unique,
    descrition varchar(255)
);