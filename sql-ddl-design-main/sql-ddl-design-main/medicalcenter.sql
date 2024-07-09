
DROP DATABASE IF EXISTS MedicalCenter;
CREATE DATABASE MedicalCenter;
\c MedicalCenter;


CREATE TABLE Doctor (
    DoctorID serial PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Specialization VARCHAR(255),
    ContactInformation VARCHAR(255)
);


CREATE TABLE Patient (
    PatientID serial PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    DateOfBirth DATE,
    ContactInformation VARCHAR(255),
    MedicalHistory TEXT
);


CREATE TABLE Visit (
    VisitID serial PRIMARY KEY,
    DoctorID INT REFERENCES Doctor(DoctorID),
    PatientID INT REFERENCES Patient(PatientID),
    VisitDate DATE,
    PurposeOfVisit VARCHAR(255),
    Diagnosis VARCHAR(255)
);


CREATE TABLE Disease (
    DiseaseID serial PRIMARY KEY,
    DiseaseName VARCHAR(255) NOT NULL,
    Description TEXT,
    Treatment TEXT
);


CREATE TABLE VisitDiagnosis (
    VisitID INT REFERENCES Visit(VisitID),
    DiseaseID INT REFERENCES Disease(DiseaseID),
    PRIMARY KEY (VisitID, DiseaseID)
);
