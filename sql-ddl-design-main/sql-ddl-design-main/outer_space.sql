-- from the terminal run:
-- psql < outer_space.sql

DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space

CREATE TABLE Celestial_bodies (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  galaxy TEXT NOT NULL
);


CREATE TABLE Planets (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  orbital_period_in_years FLOAT NOT NULL,
  orbits_around_id INT REFERENCES Celestial_bodies(id)
);


CREATE TABLE Moons (
  id SERIAL PRIMARY KEY,
  planet_id INT REFERENCES Planets(id),
  name TEXT NOT NULL
);


INSERT INTO Celestial_bodies (name, galaxy)
VALUES
  ('The Sun', 'Milky Way'),
  ('Proxima Centauri', 'Milky Way'),
  ('Gliese 876', 'Milky Way');


INSERT INTO Planets
  (name, orbital_period_in_years, orbits_around_id)
VALUES
  ('Earth', 1.00, 1),
  ('Mars', 1.88, 1),
  ('Venus', 0.62, 1),
  ('Neptune', 164.8, 1),
  ('Proxima Centauri b', 0.03, 2),
  ('Gliese 876 b', 0.23, 3);


INSERT INTO Moons (planet_id, name)
VALUES
  (1, 'The Moon'),
  (2, 'Phobos'),
  (2, 'Deimos'),
  (4, 'Naiad'),
  (4, 'Thalassa'),
  (4, 'Despina'),
  (4, 'Galatea'),
  (4, 'Larissa'),
  (4, 'S/2004 N 1'),
  (4, 'Proteus'),
  (4, 'Triton'),
  (4, 'Nereid'),
  (4, 'Halimede'),
  (4, 'Sao'),
  (4, 'Laomedeia'),
  (4, 'Psamathe'),
  (4, 'Neso');
