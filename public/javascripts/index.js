
console.log("1");
makeQuery();
let alchemyRecipes;
let cookingRecipes;

async function makeQuery() {
/*
            var xmlhttp = new XMLHttpRequest();
            var url = "http://localhost:8081/list_alchemy";
             xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                    var json = JSON.parse(this.response);
                    alchemyRecipes = json;
                    console.log(json);


                }
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
*/
    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:8081/list_cooking";
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var json2 = JSON.parse(this.response);
            cookingRecipes = json2;
            console.log(json2);

        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();


}

function recipeWindow() {

    var searchWord = document.getElementById("search").value;       //Get searchword from document
    searchWord= searchWord.toLowerCase();                                     //Make it lowercase so search is not casesensitive

    var elements = document.getElementsByClassName("clear");
    while(elements.length > 0){                                                //Remove old results
        elements[0].parentNode.removeChild(elements[0]);
    }

    for(i=0;i<Object.keys(cookingRecipes).length;i++) {     //loop through the recipes and print those that match with the searchword

    if (cookingRecipes[i].ingredient1.toLowerCase().includes(searchWord) === true || cookingRecipes[i].ingredient2.toLowerCase().includes(searchWord) === true|| cookingRecipes[i].ingredient3.toLowerCase().includes(searchWord) === true|| cookingRecipes[i].ingredient4.toLowerCase().includes(searchWord) === true|| cookingRecipes[i].ingredient5.toLowerCase().includes(searchWord) === true) {
        console.log(1);
        var row = document.createElement("tr");
        row.className="clear";
        var td = document.createElement("td");
        td.innerText = cookingRecipes[i].name;
        row.append(td);
        var td = document.createElement("td");
        td.innerText = cookingRecipes[i].effect;
        row.append(td);
        var td = document.createElement("td");
        td.innerText = cookingRecipes[i].xp;
        row.append(td);
        var td = document.createElement("td");
        td.innerText = cookingRecipes[i].ingredient1;
        row.append(td);
        var td = document.createElement("td");
        td.innerText = cookingRecipes[i].ingredient2;
        row.append(td);
        var td = document.createElement("td");
        td.innerText = cookingRecipes[i].ingredient3;
        row.append(td);
        var td = document.createElement("td");
        td.innerText = cookingRecipes[i].ingredient4;
        row.append(td);
        var td = document.createElement("td");
        td.innerText = cookingRecipes[i].ingredient5;
        row.append(td);
        document.getElementById("recipes").appendChild(row);
    }
    }



}
function postRecipe(){

    if(document.getElementById(1).value != '' && document.getElementById(2).value != '' && document.getElementById(3).value != ''){
        var newrecipe= document.getElementById(1).value +"-"+document.getElementById(2).value +"-"+document.getElementById(3).value +"-"+document.getElementById(4).value +"-"+document.getElementById(5).value +"-"+document.getElementById(6).value;


        var xmlhttp = new XMLHttpRequest();
        var url = "http://localhost:8081/post_recipe/?newrecipe="+newrecipe;
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                makeQuery();
            }
        };
        xmlhttp.open("POST", url, true);
        xmlhttp.send();
        for(i=1;i<7;i++) {
            document.getElementsByClassName('add')[i].value ='';
        }
        showAddmenu();
    } else {
        console.log("Recipe needs atleast 2 ingredients")
    }


}

function showAddmenu(){
   for(i=0;i<8;i++){
       if(document.getElementsByClassName('add')[i].style.visibility == 'hidden'){
           document.getElementsByClassName('add')[i].style.visibility = 'initial';
       } else {
           document.getElementsByClassName('add')[i].style.visibility = 'hidden';
       }

   }
console.log("?")
}