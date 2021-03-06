# BDORecipes
Small API project for school. Cooking recipes for Black Desert Online. Future features would be calculators for the amount of ingredients needed, profit etc. Could also add Alchemy recipes, which would work exactly like cooking recipes with different data. Could also add info where to find the ingredients, and market prices for ingredients and prepared dishes.

![FrontPage](https://raw.githubusercontent.com/Ninjaah/BDORecipes/master/public/images/CaptureProjekti.PNG)

**Front-end usage**
----
  Returns data about all recipes that have the searchword in any ingredient columns. Partial words work aswell. Not Case sensitive. The site gets all recipes from the backend and then shows the right ones to the user for better performance. Recipes can be added using "Add Recipe" and "Submit" buttons, but only the name and ingredients can be provided. You need to provide atleast the name and 2 ingredients. After the recipe is submitted to the database, the front-end gets all recipes so the new recipe can be seen right away without needing to refresh the page.
  
Name: Dish name  
Effect: Effect when eaten   
XP: XP gained when cooked    
Ingredient1-5: Amount and ingredient name which are needed to cook the dish

**Get Recipes**
----
  Returns json data about recipes where the searched ingredient is. If the parameter is left empty, it will return all recipes.

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
```
 
**Post new Recipe**
----
  Sends a new recipe into the database. It is sent as a single string, fields divided by '-'.

* **URL**

  /post_recipe/:newrecipe

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `newrecipe=[String]`

* **Data Params**

  None

* **Sample Call:**

  ` http://localhost:8081/post_recipe/?newrecipe=Ananaspizza-ananas-pohja-kinkku-tomaatti-juusto `

**Find recipe by name**
----
  Search recipes by name. Not case sensitive, and partial words allowed.

* **URL**

  /get_cooking/find/:name

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `name=[String]`

* **Data Params**

  None

* **Sample Call:**

  ` http://localhost:8081/get_cooking/find/?name=lama `
  
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
    }
  ]
  ```
 
 **Database**
 ----
 I used MariaDB for the database. The database has two columns that are not shown in the API/Frontend, id and level. The level means what skill level of cooking is required to make the dish. This data would be useful in a future version.
![Database](https://raw.githubusercontent.com/Ninjaah/BDORecipes/master/public/images/projektinTaulu.PNG)
