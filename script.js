var taskinput = document.getElementById("taskinput");

    taskinput.addEventListener("keydown",
    function(event){
    //    console.log(event);
    if (event.key === 'Enter') {
        addition();
    }
    })



function addition() {

    var tasklist = document.getElementById("tasklist");
    var tasktext = taskinput.value;

    if (tasktext == "") {
        console.log("write something");
    } else {

        var listitems = document.createElement("li");
        listitems.textContent = tasktext;

        tasklist.appendChild(listitems);
        
        var checkImg = document.createElement("img");
        checkImg.src = "check.png";
        checkImg.className = "done";
        listitems.appendChild(checkImg);


        var deleteImg = document.createElement("img");
        deleteImg.src = "delete.png";
        deleteImg.className = "remove";
        listitems.appendChild(deleteImg);

        
        taskinput.value = "";

    }

    let list = document.querySelectorAll('.done');
let isPending = true;
list.forEach((e) => {
    e.addEventListener(
        'click',(n) => {

            if (isPending) {

                console.log('done button clicked');
                // console.log(n.target);
                e.parentNode.style.textDecoration =  "line-through";
                isPending = false;
                
            } 
            else {
                e.parentNode.style.textDecoration =  "none";
                isPending = true;
            }

        }
    )
});

let deleteNote = document.querySelectorAll('.remove');
deleteNote.forEach((e) => {

    e.addEventListener(
        'click',(button) => {
        console.log('remove button clicked');
        // console.log(button.target);
        e.parentNode.remove();
                
        }
    );
});
}


