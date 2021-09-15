
var array = [];
var chkr;
var inputNum = parseInt(prompt("How many times you want to enter array/s?"))


for(var i = 0; i < inputNum; i++){
    array[i] = prompt("Input number/s:")
}
toString(array)
for(var i = 0; i < inputNum;i++){
    if(array[i].includes("5")){
        alert(array + " -> ! ! ! ! ! \n It contains number five." )
        chkr = 1
    }
}
    if(chkr != 1){
    alert(array + " \n None of the items contain 5 within them.")
    }

 