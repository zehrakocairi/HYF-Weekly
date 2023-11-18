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