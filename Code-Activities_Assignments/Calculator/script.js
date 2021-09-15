document.addEventListener("DOMContentLoaded", function() {
    var element = document.createElement("button");
    element.appendChild(document.createTextNode("+"));
    var page = document.getElementById("btn");
    page.appendChild(element);
    console.log(element);
});

document.addEventListener("DOMContentLoaded", function() {
    var element = document.createElement("button");
    element.appendChild(document.createTextNode("-"));
    var page = document.getElementById("btn");
    page.appendChild(element);
    console.log(element);
});

document.addEventListener("DOMContentLoaded", function() {
    var element = document.createElement("button");
    element.appendChild(document.createTextNode("*"));
    var page = document.getElementById("btn");
    page.appendChild(element);
    console.log(element);
});

document.addEventListener("DOMContentLoaded", function() {
    var element = document.createElement("button");
    element.appendChild(document.createTextNode("/"));
    var page = document.getElementById("btn");
    page.appendChild(element);
    console.log(element);
});

add = (num1,num2) => {return parseInt(num1) + parseInt(num2)};
subtract = (num1,num2) => {return parseInt(num1) - parseInt(num2)};
multiply= (num1,num2) => {return parseInt(num1) * parseInt(num2)};
divide = (num1,num2) => {return parseInt(num1) / parseInt(num2)};


var userInput = parseInt(prompt("Choose a number: \n 1 -Addition \n 2 -Subtraction \n 3 -Multiplication \n 4 -Division"));
var x = prompt("Enter First Number:");
var y = prompt("Enter Second Number:");


switch(userInput){
    case 1:
        alert("The result is: " +add(x,y));
        break;
    case 2:
        alert("The result is: " +subtract(x,y));
        break;
    case 3:
        alert("The result is: " +multiply(x,y));
        break;
    case 4:
        alert("The result is: " +divide(x,y));
        break;
        
        default: alert ("Wrong Entry!");

}