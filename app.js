//
//class="liEl"
function function1() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var userInput = document.getElementById("userInput").value;
    li.appendChild(document.createTextNode(userInput));
    li.onclick = struck; //li.addEventListener('click', struck()) 
    ul.appendChild(li);

    
    return false 
}

function struck(ele){
    ele.target.style="text-decoration:line-through"
    return false
}
var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
