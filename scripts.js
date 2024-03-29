const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    // Valida as tarefas.
    if (inputBox.value === '') {
        alert("Escreva sua tarefa.");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        // SPAN para marcar a tarefa como incompleta.
        let spanIncomplete = document.createElement("span1");
        spanIncomplete.innerHTML = "\u26A0";
        spanIncomplete.classList.add("check");
        li.appendChild(spanIncomplete);

        // SPAN para excluir a tarefa.
        let spanDelete = document.createElement("span2");
        spanDelete.innerHTML = "\u00d7"; 
        spanDelete.classList.add("delete");
        li.appendChild(spanDelete);

        listContainer.appendChild(li);
    }
    // Limpa o input de texto após cirar a tarefa.
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    //Marca a tarefa como completa/incompleta, desmarca e exclui as tarefas.
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        e.target.querySelector(".check").classList.toggle("completed");
        saveData();
    } else if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
