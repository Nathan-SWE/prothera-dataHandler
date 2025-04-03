-- Listagem de pessoas em ordem alfabética de nome
SELECT * FROM people ORDER BY name ASC;

-- Listagem de pessoas com idade entre 20 e 60 anos
SELECT * FROM people WHERE age BETWEEN 20 AND 60;

-- Listagem de pessoas que não possuem CPF
SELECT people.*
FROM people
LEFT JOIN documents ON people.id = documents.person_id AND documents.type = 'CPF'
WHERE documents.type IS NULL;

-- Pessoas de sobrenome "Soares"
SELECT * FROM people WHERE name LIKE '% Soares';

-- Listagem de tipos de documentos
SELECT DISTINCT type FROM documents;
