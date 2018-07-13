// CALCULATOR APPLICATION - Mattia Rizzardi //

var express = require("express");
var app = express();

const operate = require ('./operate'); // Importo la funzione che svolge l'operazione;

// tell the app to use EJS as our view engine
app.set("view engine", "ejs");

app.get("/", function(request, response){
   response.send("My Calculator Application");
});

// Somma:
app.get("/add/:num1/:num2", function(request, response){
	var n1 = parseFloat(request.params.num1); 
	var n2 = parseFloat(request.params.num2); 
	var sum = operate (n1, n2, "+");
	response.render("add", {number:sum});
});

// Sottrazione:
app.get("/sub/:num1/:num2", function(request, response){
	var n1 = parseFloat(request.params.num1); 
	var n2 = parseFloat(request.params.num2); 
	var sum = operate (n1, n2, "-");
	response.render("sub", {number:sum});
});

// Moltiplicazione:
app.get("/mult/:num1/:num2", function(request, response){
	var n1 = parseFloat(request.params.num1);
	var n2 = parseFloat(request.params.num2); 
	var sum = operate (n1, n2, "x");
	response.render("mult", {number:sum});
});

// Divisione:
app.get("/div/:num1/:num2", function(request, response){
	var n1 = parseFloat(request.params.num1); 
	var n2 = parseFloat(request.params.num2); 
	var sum = (n1, n2, "÷");
	response.render("div", {number:sum});
});


// Server:
app.listen(3000, function(){
    console.log("server listening on port 3000!");
});

