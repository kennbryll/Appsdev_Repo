
function add(){
    var fNum=Number(document.getElementById("num1").value);
    var sNum=Number(document.getElementById("num2").value);
    var answer= fNum + sNum;

    document.getElementById("answer").innerHTML= answer;
    }

function subtract(){
    var fNum=Number(document.getElementById("num1").value);
    var sNum=Number(document.getElementById("num2").value);
    var answer= fNum - sNum;
    
    document.getElementById("answer").innerHTML= answer;
    }

function multiply(){
    var fNum=Number(document.getElementById("num1").value);
    var sNum=Number(document.getElementById("num2").value);
    var answer= fNum * sNum;
        
    document.getElementById("answer").innerHTML= answer;
    }

function divide(){
    var fNum=Number(document.getElementById("num1").value);
    var sNum=Number(document.getElementById("num2").value);
    var answer= fNum / sNum;
        
    document.getElementById("answer").innerHTML= answer;
    }

function darkmode(){
    var element= document.body;
    element.classList.toggle("dark-mode")
    }