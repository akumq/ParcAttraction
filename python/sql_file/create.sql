INSERT INTO attraction (nom, description, difficulte, visible) VALUES ('Silver Star', 'Montagne russe', 3, 1);
INSERT INTO attraction (nom, description, difficulte, visible) VALUES ('Montagne 8', 'Montagne russe', 4, 1);

INSERT INTO users (name, password) VALUES ('toto', 'toto');

INSERT INTO critique(text, name, surname, score, attraction_id) 
VALUES ('Super Attraction je recommande', 
        'Super', 
        'Fan', 
        4,  
        (Select min(attraction_id) as attraction_id from attraction) 
        );
