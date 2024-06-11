const inputText = document.getElementById("input-text");
const liContainer = document.getElementById("list-item");
function addItem(){
    if(inputText.value === ""){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerText = inputText.value;
        liContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputText.value = "";
    saveData();
}
liContainer.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",liContainer.innerHTML);
}

function showItem(){
    liContainer.innerHTML = localStorage.getItem("data");
}
showItem();