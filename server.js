var express = require('express');
var app = express();
var URL = require('url').URL;
var mysql = require('mysql');
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());                                            //Enable CORS


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "lifeskill"
});


let alchemy = [];
let cooking = [];

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT  cookingrecipes.name, cookingrecipes.effect, cookingrecipes.xp, cookingrecipes.ingredient1 , cookingrecipes.ingredient2, cookingrecipes.ingredient3, cookingrecipes.ingredient4, cookingrecipes.ingredient5"
        + " FROM cookingrecipes"
        , function (err, result, fields) {
            if (err) throw err;
            cooking=result;
            callback2(null, result);
        });
    const callback2 = (err, res)=> console.log("Error: ", err, "Result: ", res);
/*
    con.query("SELECT  alchemyrecipes.name, alchemyrecipes.ingredient1 , alchemyrecipes.ingredient2, alchemyrecipes.ingredient3, alchemyrecipes.ingredient4, alchemyrecipes.ingredient5"
        + " FROM alchemyrecipes"
        , function (err, result2, fields) {
            if (err) throw err;
            alchemy=result2;
            callback(null, result2);
        });
    const callback = (err, res)=> console.log("Error: ", err, "Result: ", res);

*/

// This responds a GET request for the /list_recipe page.
    app.get('/list_alchemy', function (req, res) {
        console.log("Got a GET request for /list_alchemy");
        res.send(alchemy);

    });

    app.get('/list_cooking', function (req, res) {
        console.log("Got a GET request for /list_cooking");
        res.send(cooking);


    });

    app.get('/get_cooking', function (req, res) {
        console.log("Got a GET request for /get_cooking");
        var ingredient = req.query.ingredient;
        var answer;
        if (err) throw err;
        con.query("SELECT  cookingrecipes.name, cookingrecipes.effect, cookingrecipes.xp, cookingrecipes.ingredient1 , cookingrecipes.ingredient2, cookingrecipes.ingredient3, cookingrecipes.ingredient4, cookingrecipes.ingredient5"
            + " FROM cookingrecipes WHERE cookingrecipes.ingredient1 REGEXP '"+ingredient+"'"
            , function (err, result, fields) {
                if (err) throw err;
                answer = result;
                res.send(answer);
                callback3(null, result);
            });
        const callback3 = (err, res)=> console.log("Error: ", err, "Result: ", res);

    });

    app.get('/get_cooking/find', function (req, res) {
        console.log("Got a GET request for /list_cooking/find");
        var name = req.query.name;
        var answer;
        if (err) throw err;
        con.query("SELECT  cookingrecipes.name, cookingrecipes.effect, cookingrecipes.xp, cookingrecipes.ingredient1 , cookingrecipes.ingredient2, cookingrecipes.ingredient3, cookingrecipes.ingredient4, cookingrecipes.ingredient5"
            + " FROM cookingrecipes WHERE cookingrecipes.name REGEXP '"+name+"'"
            , function (err, result, fields) {
                if (err) throw err;
                answer = result;
                res.send(answer);
                callback3(null, result);
            });
        const callback3 = (err, res)=> console.log("Error: ", err, "Result: ", res);

    });

    app.post('/post_recipe', function (req, res) {
        console.log("Got a POST request for /post_recipe");
        var newrecipe = req.query.newrecipe;
        console.log(newrecipe);
        var values = [8];
            values = newrecipe.split("-");
        console.log(values.length);
        con.query("INSERT INTO  cookingrecipes (name, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5)"
            + " VALUES ('"+ values[0]+"','"+values[1] +"','"+values[2] +"','"+values[3] +"','"+values[4] +"','"+values[5]+"')"
            , function (err, result2, fields) {
                if (err) throw err;

                callback(null, result2);
            });
        const callback = (err, res)=> console.log("Error: ", err, "Result: ", res);

        res.send(newrecipe);
        getDataAgain();

    });

    function getDataAgain() {

            if (err) throw err;
            con.query("SELECT  cookingrecipes.name, cookingrecipes.effect, cookingrecipes.xp, cookingrecipes.ingredient1 , cookingrecipes.ingredient2, cookingrecipes.ingredient3, cookingrecipes.ingredient4, cookingrecipes.ingredient5"
                + " FROM cookingrecipes"
                , function (err, result, fields) {
                    if (err) throw err;
                    cooking=result;
                    callback2(null, result);
                });
            const callback2 = (err, res)=> console.log("Error: ", err, "Result: ", res);

    }
});

