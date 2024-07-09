
DROP DATABASE IF EXISTS  adopt;

CREATE DATABASE adopt;

\c adopt

CREATE TABLE pets
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  species TEXT NOT NULL,
  photo_url TEXT,
  age INT,
  notes TEXT,
  available BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO pets
  (name, species, photo_url, age, notes, available)
VALUES
  ('Woofly', 'dog', 'https://www.akc.org/wp-content/uploads/2021/07/Cavalier-King-Charles-Spaniel-laying-down-indoors.jpeg', 3, 'Incredibly adorable.', 't'),
  ('Porchetta', 'porcupine', 'https://wamu.org/wp-content/uploads/2019/04/dl607_porcupines_penelope_med_wide-3df52ca121dbb5046e2ada2d3a52d73a77199ca7-760x428.jpg', 4, 'Somewhat spiky!', 't'),
  ('Snargle', 'cat', 'https://i.kinja-img.com/image/upload/c_fit,f_auto,g_center,q_60,w_1315/d91b5cd8bfec5491f16820f23bf3c815.jpg', null, null, 't'),
  ('Dr. Claw', 'cat', null, null, null, 't');

