function addition() {

    var taskinput = document.getElementById("taskinput");
    var tasklist = document.getElementById("tasklist");

    var tasktext = taskinput.value;

    if (tasktext == "") {
        console.log("write something");
    } else {
        console.log("wait");
        var listitems = document.createElement("li");
        listitems.textContent = tasktext;

        tasklist.appendChild(listitems);
        taskinput.value = "";
    }
}

