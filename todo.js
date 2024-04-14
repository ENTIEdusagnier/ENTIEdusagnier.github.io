let task_list = [];

function renderTaskList() {
    let list = document.getElementById("listatarea");

    list.innerHTML = "";

    
    for (let i = 0; i < task_list.length; i++) {
        list.innerHTML += "<li>" + task_list[i] + " <button type=\"button\"> Borrar </button></li>";
    }

    let buttons = document.querySelectorAll("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            console.log(i);

            task_list.splice(i, 1);

            buttons[i].parentElement.remove();
        });
    }
}

let button_add = document.getElementById("añadir");

button_add.addEventListener("click", function() {
    let task = document.getElementById("tarea");

	if (task.value === "") {
		alert("Estas intentando insertar una tarea sin nada");

	}
	else{
		task_list.push(tarea.value);

    	task.value = "";

    	console.log(task_list);

    	renderTaskList();
        localStorage.setItem("task_list", JSON.stringify(task_list));

	}

    
});