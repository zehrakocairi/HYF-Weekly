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

select recipe.* from recipe
left join recipe_category on recipe.id = recipe_category.recipe_id
left join category on recipe_category.category_id = category.id
left join step on  recipe.id = step.recipe_id 
left join ingredient on step.id = ingredient.step_id
where category.name = "Vegetarian" and ingredient.name = "Condensed milk",

select recipe.* from recipe
left join recipe_category on recipe.id = recipe_category.recipe_id
left join category on recipe_category.category_id = category.id
left join step on  recipe.id = step.recipe_id 
where category.name = "Cake" and step.description not like "%bake%"

select recipe.*  from recipe
left join recipe_category on recipe.id = recipe_category.recipe_id
left join category on recipe_category.category_id = category.id
where category.name = "Vegan" or category.name = "Japanese" 