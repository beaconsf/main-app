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
  lng DECIMAL(9,6) NOT NULL,
  lat DECIMAL(9,6) NOT NULL,
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
