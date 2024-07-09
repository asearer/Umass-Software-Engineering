
CREATE DATABASE Craigslist;
\c Craigslist;


CREATE TABLE Region (
    RegionID serial PRIMARY KEY,
    RegionName VARCHAR(255) NOT NULL
);


CREATE TABLE user (
    UserID serial PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL, 
    PreferredRegionID INT REFERENCES Region(RegionID)
);


CREATE TABLE Post (
    PostID serial PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Text TEXT,
    UserID INT REFERENCES User(UserID),
    Location VARCHAR(255),
    RegionID INT REFERENCES Region(RegionID)
);


CREATE TABLE Category (
    CategoryID serial PRIMARY KEY,
    CategoryName VARCHAR(255) NOT NULL
);


CREATE TABLE PostCategory (
    PostID INT REFERENCES Post(PostID),
    CategoryID INT REFERENCES Category(CategoryID),
    PRIMARY KEY (PostID, CategoryID)
);

