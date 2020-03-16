# BDORecipes
Small API project for school. Cooking and Alchemy recipes for Black Desert Online.

**Front-end usage**
----
  Returns data about all recipes that have the searchword in any ingredient columns. Partial words work aswell. Not Case sensitive. The site gets all recipes from the backend and then shows the right ones to the user for better performance.
Name: Dish name  Effect: Effect when eaten   XP: XP gained when cooked    Ingredient1-5: Amount and ingredient name which are needed to cook the dish

**Get Recipes**
----
  Returns json data about recipes where the searched ingredient is.

* **URL**

  /get_cooking/:ingredient

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `ingredient=[String]`

* **Data Params**

  None

* **Sample Call:**

  `
   http://localhost:8081/get_cooking/?ingredient=llama
  `
  Response:
  ```
  [
    {
        "name": "Skewered Llama Cheese Melt",
        "effect": "Weight Limit +100LT",
        "xp": "2400",
        "ingredient1": "5 Llama Meat",
        "ingredient2": "4 Cheese",
        "ingredient3": "3 Hot Pepper",
        "ingredient4": "1 Pepper",
        "ingredient5": "1 White Sauce"
    },
    {
        "name": "Special Drieghan Meal",
        "effect": "Knowledge Gain Chance +5%/Chance to Gain Higher Grade Knowledge +2%/Down Attack Damaged +5%/100LT",
        "xp": "2400",
        "ingredient1": "1 Skewered Llama Cheese Melt",
        "ingredient2": "1 Stir-Fried Bracken",
        "ingredient3": "1 Roast Mamott",
        "ingredient4": "1 Ghormeh Sabzi",
        "ingredient5": "2 Honey Wine"
    }
]
  ```
