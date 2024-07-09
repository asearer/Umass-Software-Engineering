-- Create the SportsLeague database
CREATE DATABASE SportsLeague;
\c SportsLeague;

-- Create the Team table
CREATE TABLE Team (
    TeamID serial PRIMARY KEY,
    TeamName VARCHAR(255) NOT NULL,
    TeamLocation VARCHAR(255),
    CoachName VARCHAR(255)
);

-- Create the Player table
CREATE TABLE Player (
    PlayerID serial PRIMARY KEY,
    PlayerName VARCHAR(255) NOT NULL,
    TeamID INT REFERENCES Team(TeamID),
    PlayerPosition VARCHAR(255),
    DateOfBirth DATE
);

-- Create the Referee table
CREATE TABLE Referee (
    RefereeID serial PRIMARY KEY,
    RefereeName VARCHAR(255) NOT NULL
);

-- Create the Match table
CREATE TABLE Match (
    MatchID serial PRIMARY KEY,
    HomeTeamID INT REFERENCES Team(TeamID),
    AwayTeamID INT REFERENCES Team(TeamID),
    MatchDateTime TIMESTAMP,
    RefereeID INT REFERENCES Referee(RefereeID),
    MatchVenue VARCHAR(255),
    HomeTeamScore INT,
    AwayTeamScore INT
);

-- Create the Goal table
CREATE TABLE Goal (
    GoalID serial PRIMARY KEY,
    MatchID INT REFERENCES Match(MatchID),
    ScoringPlayerID INT REFERENCES Player(PlayerID),
    AssistPlayerID INT REFERENCES Player(PlayerID),
    GoalTime TIME
);

-- Create the Season table
CREATE TABLE Season (
    SeasonID serial PRIMARY KEY,
    SeasonName VARCHAR(255) NOT NULL,
    StartDate DATE,
    EndDate DATE
);

-- Create the Standings table
CREATE TABLE Standings (
    StandingsID serial PRIMARY KEY,
    SeasonID INT REFERENCES Season(SeasonID),
    TeamID INT REFERENCES Team(TeamID),
    Wins INT,
    Losses INT,
    Draws INT,
    Points INT,
    GoalsScored INT,
    GoalsAgainst INT
);

