const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://zehrakocairi:Test123...@cluster0.qzpvjfn.mongodb.net/";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("recipe");
    const recipes = database.collection("recipes");
    const docs = [
      {
        _id: 1,
        name: "No-Bake Cheesecake",
        categories: [1, 2, 3],
        steps: [
          { description: "Beat Cream Cheese", ingredients: ["Cream Cheese"] },
          { description: "Add condensed Milk and blend", ingredients: ["Condensed milk"] },
          { description: "Add Lemon Juice and blend", ingredients: ["Lemon Juice"] },
          { description: "Add the mix to the pie crust", ingredients: ["Pie Crust"] },
          { description: "Spread the Cherry Jam", ingredients: ["Cherry Jam"] },
          { description: "Place in refrigerator for 3h", ingredients: [] },
        ],
      },
      {
        _id: 2,
        name: "Roasted Brussels Sprouts",
        categories: [4, 5],
        steps: [
          { description: "Preheat the oven", ingredients: [] },
          { description: "Mix the ingredients in a bowl", ingredients: [] },
          { description: "Spread the mix on baking sheet", ingredients: [] },
          { description: "Bake for 30", ingredients: [] },
        ],
      },
      {
        _id: 3,
        name: "Mac & Cheese",
        categories: [3],
        steps: [
          { description: "Cook Macaroni for 8", ingredients: ["Macaroni"] },
          { description: "Melt butter in a saucepan", ingredients: ["Butter"] },
          { description: "Add flour, salt, pepper and mix", ingredients: ["Flour", "Salt", "Pepper"] },
          { description: "Add Milk and mix", ingredients: ["Milk"] },
          { description: "Cook until mix is smooth", ingredients: [] },
          { description: "Add cheddar cheese", ingredients: ["cheddar cheese"] },
          { description: "Add the macaroni", ingredients: ["Macaroni"] },
        ],
      },
      {
        _id: 4,
        name: "Tamagoyaki Japanese Omelette",
        categories: [3, 6],
        steps: [
          { description: "Beat the eggs", ingredients: ["Eggs"] },
          { description: "Add soy sauce, sugar and salt", ingredients: ["Soy sauce", "Sugar", "Salt"] },
          { description: "Add oil to a saucepan", ingredients: ["Oil"] },
          { description: "Bring to medium heat", ingredients: [] },
          { description: "Add some mix to the saucepan", ingredients: [] },
          { description: "Let it cook for 1", ingredients: [] },
          { description: "Add oil to a saucepan", ingredients: ["Oil"] },
          { description: "Add some mix to the saucepan", ingredients: [] },
          { description: "Let it cook for 1", ingredients: [] },
          { description: "Remove pan from fire", ingredients: [] },
        ],
      },
    ];
    const options = { ordered: true };
    const resultRecipes = await recipes.insertMany(docs, options);

    const categories = database.collection("categories");
    const categoriesDocs = [
      { _id: 1, name: "Cake" },
      { _id: 2, name: "No-Bake" },
      { _id: 3, name: "Vegetarian" },
      { _id: 4, name: "Vegan" },
      { _id: 5, name: "Gluten-Free" },
      { _id: 6, name: "Japanese" },
    ];

    const resultCategories = await categories.insertMany(categoriesDocs, options);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

/* 
1) What are the collections?
-Recipes collection
-Categories collection

2) What information will you embed in a document and which will you store normalised?
 Embedded Information:
 _id, name, steps, ingredients,

 Normalized Information:
 categories

3)What made you decide when to embed information? What assumptions did you make?
I decided to seperate categories from the recipes because I thought that it would be easier to search for recipes based on categories.
I also thought that it would be easier to update categories if they were seperated from the recipes.

 4)If you were given MySQL and MongoDB as choices to build the recipe's database at the beginning, which one would you choose and why?
 I would like to use mongoDB because it is more flexible and scalable. It is also easier to use and faster to process data.
*/
