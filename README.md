# futsal2019

cd /futsal2019

npm install

npm start


### DB - NEO4J SETUP

#### run on db
CREATE CONSTRAINT ON (n:Team) ASSERT n.name IS UNIQUE

CREATE CONSTRAINT ON (n:Player) ASSERT n.name IS UNIQUE  //Optional

CREATE CONSTRAINT ON (n:Team) ASSERT n.id IS UNIQUE

CREATE CONSTRAINT ON (n:Player) ASSERT n.id IS UNIQUE

CREATE CONSTRAINT ON (n:Game) ASSERT n.id IS UNIQUE

CREATE CONSTRAINT ON (n:Goal) ASSERT n.id IS UNIQUE

### .env on backend

NEO4J_URL=bolt://sampleHost:7687

NEO4J_USERNAME=sampleUser

NEO4J_PASSWORD=samplePassword