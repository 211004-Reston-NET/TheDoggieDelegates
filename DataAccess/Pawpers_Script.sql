Create Table Profile
(
	profile_id                INT IDENTITY(1,1) PRIMARY KEY,
	profile_name              VARCHAR(32) NOT NULL,
	profile_streetaddress     VARCHAR(32) NOT NULL,
	profile_city		      VARCHAR(32) NOT NULL,
	profile_state		      VARCHAR(32) NOT NULL,
	profile_zipcode		      VARCHAR(9) NOT NULL,
	profile_age               INT NOT NULL,
	profile_homephone         VARCHAR(9) NOT NULL,
	profile_personalphone     VARCHAR(9) NOT NULL,
	profile_email             VARCHAR(32) NOT NULL,
	profile_occupation        VARCHAR(32),
	profile_spousename        VARCHAR(32),
	profile_children          INT NOT NULL,
	profile_dwellingid        INT NOT NULL,
	profile_hasyard           INT NOT NULL,
	profile_landlordname      VARCHAR(32),
	profile_landlordphone     VARCHAR(9),
	profile_otherpetname      VARCHAR(32),
	profile_otherpetbreed     VARCHAR(32),
	profile_otherpetsex       VARCHAR(9),
	profile_otherpetage       INT,
	profile_familyallergies   INT NOT NULL,
	profile_responsiblefordog VARCHAR(32) NOT NULL,
	profile_adoptionreason    VARCHAR(32) NOT NULL,
	profile_dogsleepat        VARCHAR(32) NOT NULL,
	profile_dogaggresive      VARCHAR(32) NOT NULL,
	profile_medfordog         VARCHAR(32) NOT NULL,
	profile_nocaredog         VARCHAR(32) NOT NULL,
	
	CONSTRAINT pro_dwe_FK FOREIGN KEY(profile_dwellingid)
			REFERENCES Dwelling(dwelling_id),
			
	CONSTRAINT pro_sta_FK FOREIGN KEY(profile_state)
			REFERENCES State(state_id),
	
);

ALTER TABLE Profile 
ADD CONSTRAINT pro_sta_FK 
FOREIGN KEY(profile_stateid) REFERENCES State(state_id)

ALTER TABLE Profile
DROP COLUMN profile_state

ALTER TABLE Profile
ADD profile_stateid INT NOT NULL

Create Table Dwelling
(
	dwelling_id               INT IDENTITY(1,1) PRIMARY KEY,
	dwelling_type             VARCHAR(32) NOT NULL,

);

CREATE TABLE [state](
  
[state_id] [int] IDENTITY(1,1) NOT NULL,
[state_code] [nchar](2) NOT NULL,
[state_name] [nvarchar](128) NOT NULL,

CONSTRAINT [PK_state] PRIMARY KEY CLUSTERED 
(  [state_id] ASC )WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]) 
ON [PRIMARY]



INSERT into [state] values ('AL', 'Alabama'),
('AK', 'Alaska'),
('AL', 'Alabama'),
('AZ', 'Arizona'),
('AR', 'Arkansas'),
('CA', 'California'),
('CO', 'Colorado'),
('CT', 'Connecticut'),
('DE', 'Delaware'),
('DC', 'District of Columbia'),
('FL', 'Florida'),
('GA', 'Georgia'),
('HI', 'Hawaii'),
('ID', 'Idaho'),
('IL', 'Illinois'),
('IN', 'Indiana'),
('IA', 'Iowa'),
('KS', 'Kansas'),
('KY', 'Kentucky'),
('LA', 'Louisiana'),
('ME', 'Maine'),
('MD', 'Maryland'),
('MA', 'Massachusetts'),
('MI', 'Michigan'),
('MN', 'Minnesota'),
('MS', 'Mississippi'),
('MO', 'Missouri'),
('MT', 'Montana'),
('NE', 'Nebraska'),
('NV', 'Nevada'),
('NH', 'New Hampshire'),
('NJ', 'New Jersey'),
('NM', 'New Mexico'),
('NY', 'New York'),
('NC', 'North Carolina'),
('ND', 'North Dakota'),
('OH', 'Ohio'),
('OK', 'Oklahoma'),
('OR', 'Oregon'),
('PA', 'Pennsylvania'),
('PR', 'Puerto Rico'),
('RI', 'Rhode Island'),
('SC', 'South Carolina'),
('SD', 'South Dakota'),
('TN', 'Tennessee'),
('TX', 'Texas'),
('UT', 'Utah'),
('VT', 'Vermont'),
('VA', 'Virginia'),
('WA', 'Washington'),
('WV', 'West Virginia'),
('WI', 'Wisconsin'),
('WY', 'Wyoming');