let add = document.getElementById("add");

add.addEventListener('click', function(e) {
    let toDo = document.createElement("li");
    document.getElementById("check").append(toDo);
    let addTillLista = document.createElement("input");
    addTillLista.value = document.getElementById("toDo").value
    addTillLista.setAttribute("disabled", true);

    document.getElementById("toDo").value = ""

    let changeButton = document.createElement("button");
    changeButton.textContent = "Ändra";

    changeButton.addEventListener('click', function(a) {
        if(a.target.parentNode.firstChild.disabled == true) {
            a.target.parentNode.firstChild.disabled = false;
            a.target.textContent ="Spara"
        } else {
            a.target.parentNode.firstChild.disabled = true;
            a.target.textContent ="Ändra"

        }
    })
     
    let doneButton = document.createElement("button")
    doneButton.textContent = "Färdig";

    toDo.append(doneButton);
    doneButton.addEventListener("click", function(){
        let nyLista = document.createElement("ul");
        document.getElementById("done").append(toDo)
        doneButton.remove();

    })

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Radera";
 
    toDo.append(deleteButton);
    deleteButton.addEventListener('click', function(a) {
		let deleteButton = a.target;
        deleteButton.parentNode.remove(); 
        doneButton.remove(); 
        changeButton.remove();
        addTillLista.remove();
        toDo.remove();
        toDo.append(deleteButton, doneButton, changeButton, addTillLista, toDo); 
	})
    

    toDo.append(addTillLista, changeButton, doneButton, deleteButton);

}) 


