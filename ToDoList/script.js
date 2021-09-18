

function toDoList(){
    var item= document.getElementById("todoInput").value;
    var text=document.createTextNode(item);
    var newItem=document.createElement("li");
    newItem.appendChild(text);
    if(item==='')
       return true;
    else
    {document.getElementById("UL").appendChild(newItem);}

    document.getElementById("todoInput").value = "";

    var span = document.createElement("SPAN");
    var del = document.createTextNode("delete");
    span.className = "close";
    span.appendChild(del);
    newItem.appendChild(span);

    for(var i=0;i<close.length;i++){
    close[i].onclick= function(){
        var div=this.parentElement.style.display = 'none';
        }
    }
}

var list= document.getElementById("UL");
list.addEventListener("click",function(event){
    if(event.target.tagName==='LI'){
        event.target.classList.toggle('checked')
    }
},false);

var addClose= document.getElementsByTagName("LI");
for(var i=0;i<addClose.length;i++){
    var span= document.createElement("SPAN");
    var del= document.createTextNode("delete");
    span.className="close";
    span.appendChild(del);
    addClose[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for(var i=0;i<close.length;i++){
    close[i].onclick= function(){
        var div=this.parentElement.style.display = 'none';
    }
}


