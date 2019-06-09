DROP DATABASE IF EXISTS beacon;

CREATE DATABASE beacon;

USE beacon;

CREATE TABLE users(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(50) NOT NULL,
  org varchar(50)
);

CREATE TABLE events (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title varchar(100) NOT NULL,
  start_time DATETIME NOT NULL,
  end_time DATETIME NOT NULL,
  lat DECIMAL(9,6) NOT NULL,
  lng DECIMAL(9,6) NOT NULL,
  owner int,
  FOREIGN KEY (owner)
  REFERENCES users(id)
);

CREATE TABLE categories (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  kind varchar(50)
);

CREATE TABLE event_type (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  event_id int,
  event_kind int,
  FOREIGN KEY (event_id)
  REFERENCES events(id),
  FOREIGN KEY (event_kind)
  REFERENCES categories(id)
);



INSERT INTO categories(kind) VALUES('shelter');
INSERT INTO categories(kind) VALUES('food');
INSERT INTO categories(kind) VALUES('medical');
INSERT INTO categories(kind) VALUES('dental');
INSERT INTO categories(kind) VALUES('selfCare');
INSERT INTO categories(kind) VALUES('community');

INSERT INTO users(username, org) VALUES('rubberducky', 'lava mae');
INSERT INTO events(title, start_time, end_time, lat, lng, owner) VALUES('Get a shower and some free stuff!', '2019-06-09 08:00:00', '2019-06-09 13:30:00', 37.779200, -122.419000, 1);
INSERT INTO event_type(event_id, event_kind) VALUES(1, 5);
INSERT INTO event_type(event_id, event_kind) VALUES(1, 6);