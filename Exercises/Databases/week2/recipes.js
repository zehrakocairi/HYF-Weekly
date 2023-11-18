import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "recipe",
});

connection.connect();

// const insert_Category_text = "insert into Category (category_name) values";
// const insert_Category = ["('Cake')", "('No-Bake')", " ('Vegetarian')", "('Vegan')", "('Gluten-free')", "('Japanese')"];

// for (let i = 0; i < insert_Category.length; i++) {
//   connection.query(`${insert_Category_text} ${insert_Category[i]}`, (err, data) => {
//     if (err) {
//       throw err;
//     }
//   });
// }

// const insert_Recipe_text = "insert into Recipe (recipe_name) values";
// const recipes = [
//   {
//     name: "No-Bake Cheesecake",
//     categories: [{ name: "No-Bake" }, { name: "Vegetarian" }, { name: "Cake" }],
//     steps: [
//       {
//         name: "Beat Cream Cheese",
//         ingredients: [{ name: "Cream Cheese", amount: 1 }],
//       },
//       {
//         name: "Add condensed Milk and blend",
//         ingredients: [{ name: "Milk", amount: 0.5 }],
//       },
//       {
//         name: "Place in refrigerator for 3h.",
//         ingredients: [],
//       },
//     ],
//   },
// ];

// for (let i = 0; i < recipes.length; i++) {
//   let recipe = recipes[i];
//   connection.query(`${insert_Recipe_text} ('${recipe.name}')`, function (err, data) {
//     const recipeId = data.id;
//     connection.query(`select category_id from categories where category_name in (${recipe.categories.map((c) => c.name).join(", ")})`, function (err, data) {

//       if (err) {
//         throw err;
//       }
//     });
//   });

//   for (let i = 0; i < insert_Recipe.length; i++) {
//     connection.query(`${insert_Recipe_text} ${insert_Recipe[i]}`, function (err, data) {
//       if (err) {
//         throw err;
//       }
//     });
//   }
// }
