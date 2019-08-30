# football_line

Implemented Node.js architecture. Your will need to install node.js and place the modules and .json files in the same folder. 
I did not add them to the repo because they are huge and youll need to have node installed on your machine anyway. You'll also
need to install MongoDB and then the node.js Mongo driver.


Node.js
https://nodejs.org/en/


MongoDB
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x-tarball/


Node.js MongoDB Driver:
https://mongodb.github.io/node-mongodb-native/

Heres a quick tutorial on how to use MongoDB from the terminal and use the Mongo Shell:
https://www.tutorialkart.com/mongodb/mongodb-create-collection/

create a db called football_line by running mongo and typing: use football_line
Then you can create a  players collection (table in SQL) by: 
db.players.insert({name: "Brandon", weekPoints: 0, wins: 1, totalPoints: 5})

Then you have a db to work with and it shouldnt yell at you.


After this is set up and you can run the server and the db (which should take a solid chunk of time) you can help me with 
the stupid backend. 


I was able to populate the table dynamically when I was pulling data from just a .JSON file, but since I've switched to Node.js
and trying to pull it from the db I'm not sure how to do it, I just end up with the JSON object on the page. I routed it to 
/scores so that at least the site would show up for now.
