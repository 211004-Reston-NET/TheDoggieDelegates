Create table Favorite (fav_id int identity (1,1) primary key not null,
						dog_id int,
						is_available BIT)
						
Alter Table Favorite Add profile_id int


Create table Category (category_id int identity (1,1) primary key not null,
						category_name varchar (50) )
						
						
Create table Topics (topic_id int identity (1,1) primary key not null,
					topic_name varchar(50), 
					topic_body varchar(250),
					profile_id int,
					post_date DateTime)