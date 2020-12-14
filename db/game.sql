-- This is the seeding script for my postgres db.

-- Use the sdcGames db;
\c games;

-- Create a table with defined schema
CREATE TABLE game (
  id int,
  item VARCHAR(150),
  price VARCHAR(20),
  imgUrl VARCHAR(255),
  system VARCHAR(150)
);

-- Import the CSV file
COPY game(id, item, price, imgUrl, system)
FROM '/Users/andrewmcritchie/Desktop/SDC/productView/data.csv'
DELIMITER ','
CSV HEADER;

-- Create indexing within game table
CREATE INDEX game_index
ON game(id);