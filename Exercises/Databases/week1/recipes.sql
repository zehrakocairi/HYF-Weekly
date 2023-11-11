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
    amount int,
    foreign key (step_id) REFERENCES Step(id)
);