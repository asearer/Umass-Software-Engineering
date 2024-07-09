-- from the terminal run:
-- psql < air_traffic.sql

DROP DATABASE IF EXISTS air_traffic;

CREATE DATABASE air_traffic;

\c air_traffic

CREATE TABLE passengers
(
  passenger_id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL
);


CREATE TABLE airlines
(
  airline_id SERIAL PRIMARY KEY,
  airline_name TEXT NOT NULL
);


CREATE TABLE locations
(
  location_id SERIAL PRIMARY KEY,
  city TEXT NOT NULL,
  country TEXT NOT NULL
);


CREATE TABLE flights
(
  flight_id SERIAL PRIMARY KEY,
  departure TIMESTAMP NOT NULL,
  arrival TIMESTAMP NOT NULL,
  airline_id INT NOT NULL,
  from_location_id INT NOT NULL,
  to_location_id INT NOT NULL,
  seat TEXT NOT NULL,
  FOREIGN KEY (airline_id) REFERENCES airlines(airline_id),
  FOREIGN KEY (from_location_id) REFERENCES locations(location_id),
  FOREIGN KEY (to_location_id) REFERENCES locations(location_id)
);


INSERT INTO passengers (first_name, last_name)
VALUES
  ('Jennifer', 'Finch'),
  ('Thadeus', 'Gathercoal'),
  ('Sonja', 'Pauley'),
  ('Jennifer', 'Finch'),
  ('Waneta', 'Skeleton'),
  ('Thadeus', 'Gathercoal'),
  ('Berkie', 'Wycliff'),
  ('Alvin', 'Leathes'),
  ('Berkie', 'Wycliff'),
  ('Cory', 'Squibbes');


INSERT INTO airlines (airline_name)
VALUES
  ('United'),
  ('British Airways'),
  ('Delta'),
  ('TUI Fly Belgium'),
  ('Air China'),
  ('American Airlines'),
  ('Avianca Brasil');


INSERT INTO locations (city, country)
VALUES
  ('Washington DC', 'United States'),
  ('Tokyo', 'Japan'),
  ('Los Angeles', 'United States'),
  ('Seattle', 'United States'),
  ('Paris', 'France'),
  ('Dubai', 'UAE'),
  ('New York', 'United States'),
  ('Cedar Rapids', 'United States'),
  ('Charlotte', 'United States'),
  ('Sao Paolo', 'Brazil');


INSERT INTO flights (departure, arrival, airline_id, from_location_id, to_location_id, seat)
VALUES
  ('2018-04-08 09:00:00', '2018-04-08 12:00:00', 1, 1, 4, '33B'),
  ('2018-12-19 12:45:00', '2018-12-19 16:15:00', 2, 2, 3, '8A'),
  ('2018-01-02 07:00:00', '2018-01-02 08:03:00', 3, 3, 7, '12F'),
  ('2018-04-15 16:50:00', '2018-04-15 21:00:00', 3, 4, 8, '20A'),
  ('2018-08-01 18:30:00', '2018-08-01 21:50:00', 4, 5, 9, '23D'),
  ('2018-10-31 01:15:00', '2018-10-31 12:55:00', 5, 6, 10, '18C'),
  ('2019-02-06 06:00:00', '2019-02-06 07:47:00', 1, 8, 7, '9E'),
  ('2018-12-22 14:42:00', '2018-12-22 15:56:00', 6, 9, 7, '1A'),
  ('2019-02-06 16:28:00', '2019-02-06 19:18:00', 6, 7, 11, '32B'),
  ('2019-01-20 19:30:00', '2019-01-20 22:45:00', 7, 10, 12, '10D');
