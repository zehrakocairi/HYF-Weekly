CREATE TABLE Recipe (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE Category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE Recipe_Category (
    recipe_id INT,
    category_id INT,
    PRIMARY KEY (recipe_id,  category_id),
    FOREIGN KEY (recipe_id) REFERENCES Recipe(id),
    FOREIGN KEY ( category_id) REFERENCES Category( id)
);

CREATE TABLE Step (
    id INT AUTO_INCREMENT PRIMARY KEY,
    recipe_id INT,
    description TEXT NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES Recipe(id)
);

CREATE TABLE Ingredient (
    id INT AUTO_INCREMENT PRIMARY KEY,
    step_id INT,
    name TEXT NOT NULL,
    foreign key (step_id) REFERENCES Step(id)
);

INSERT INTO Recipe (id, name) VALUES
(1, 'No-Bake Cheesecake'),
(2, 'Roasted Brussels Sprouts'),
(3, 'Mac & Cheese'),
(4, 'Tamagoyaki Japanese Omelette');

INSERT INTO Category (id, name) VALUES
(1, 'Cake'),
(2, 'No-Bake'),
(3, 'Vegetarian'),
(4, 'Vegan'),
(5, 'Gluten-Free'),
(6, 'Japanese');

INSERT INTO Recipe_Category (recipe_id, category_id) VALUES
(1, 1), (1, 2), (1, 3),
(2, 4), (2, 5),
(3, 3),
(4, 3), (4, 6);

INSERT INTO Step (id, recipe_id, description) VALUES
(1, 1, 'Beat Cream Cheese'),
(2, 1, 'Add condensed Milk and blend'),
(3, 1, 'Add Lemon Juice and blend'),
(4, 1, 'Add the mix to the pie crust'),
(5, 1, 'Spread the Cherry Jam'),
(6, 1, 'Place in refrigerator for 3h'),
(7, 2, 'Preheat the oven'),
(8, 2, 'Mix the ingredients in a bowl'),
(9, 2, 'Spread the mix on baking sheet'),
(10, 2, 'Bake for 30'),
(11, 3, 'Cook Macaroni for 8'),
(12, 3, 'Melt butter in a saucepan'),
(13, 3, 'Add flour, salt, pepper and mix'),
(14, 3, 'Add Milk and mix'),
(15, 3, 'Cook until mix is smooth'),
(16, 3, 'Add cheddar cheese'),
(17, 3, 'Add the macaroni'),
(18, 4, 'Beat the eggs'),
(19, 4, 'Add soy sauce, sugar and salt'),
(20, 4, 'Add oil to a saucepan'),
(21, 4, 'Bring to medium heat'),
(22, 4, 'Add some mix to the saucepan'),
(23, 4, 'Let it cook for 1'),
(24, 4, 'Add oil to a saucepan'),
(25, 4, 'Add some mix to the saucepan'),
(26, 4, 'Let it cook for 1'),
(27, 4, 'Remove pan from fire');

INSERT INTO Ingredient (id, step_id, name) VALUES
(1, 1, 'Cream Cheese'),
(2, 2, 'Condensed milk'),
(3, 3, 'Lemon Juice'),
(4, 4, 'Pie Crust'),
(5, 5, 'Cherry Jam'),
(6, 11,'Macaroni'),
(7, 12, 'Butter'),
(8, 13, 'Flour'),
(9, 13, 'Salt'),
(10, 13, 'Pepper'),
(11, 14, 'Milk'),
(12, 16, 'cheddar cheese'),
(13, 17,'Macaroni'),
(14, 18, 'Eggs'),
(15, 19, 'Soy sauce'),
(16, 19, 'Sugar'),
(17, 19, 'Salt'),
(18, 20, 'Oil');
(19, 24, 'Oil'),


/*
-These tables already in 2NF but,
-I'm not sure if it is in 3NF or not. For this I suppose to test that there are no transitive dependencies.
I couldn't understand transitive dependencies very well.


-If I want to add thousands of recipes to my database, what challenges do I foresee?
 -Performance issues
 -Data integrity
 -Backup and Restore

*/

