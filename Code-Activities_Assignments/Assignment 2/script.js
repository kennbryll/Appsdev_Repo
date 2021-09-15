let obj = [{
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male"
},
{
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a"
},
{
    "name": "R2-D2",
    "height": "96",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a"
},
{
    "name": "Darth Vader",
    "height": "202",
    "mass": "136",
    "hair_color": "none",
    "skin_color": "white",
    "eye_color": "yellow",
    "birth_year": "41.9BBY",
    "gender": "male"
},
{
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female"
}]

var operation = parseInt(prompt("User's selection. Choose (1-4):"));
let arr = [];
let x;


switch (operation) {
     case 1:
        x = function1(obj,arr)
        alert(x)  
      break;
    case 2:
        x = function2(obj,arr)
        alert(x)  
      break;
      
    case 3:
        x = function3(obj,arr)
        alert(x)  
      break;
      
    case 4:
        x = function4(obj,arr)
        alert(x)  
        break;
}


function function1(obj,_arr) {
    for(var i = 0;i < 5;i++){
        if(obj[i].gender == 'male'){
        _arr[i] = obj[i].name
        }
    }
    return _arr;
}

function function2(obj,_arr) {
    for(var i = 0;i < 5;i++){
        if(obj[i].gender.includes("female")){
        _arr[i] = obj[i].name
        }
    }
    return _arr;
}

function function3(obj,_arr) {
    for(var i = 0;i < 5;i++){
        if(obj[i].gender.includes("n/a")){
        _arr[i] = obj[i].name
        }
    }
    return _arr;
}

function function4(obj,_arr) {
    for(var i = 0;i < 5;i++){
        if(obj[i].height >= 150){
        _arr[i] = obj[i].name
        }
    }
    return _arr;
}