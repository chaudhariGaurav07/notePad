document.addEventListener("DOMContentLoaded", () => {
    const createBtn = document.getElementById("createBtn");
    const notesContainer = document.querySelector(".notes-container");

    createBtn.addEventListener("click", () => {
        let inputBox = document.createElement("p");
        let img = document.createElement("img");
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");
        img.src = "images/delete.png";
        notesContainer.appendChild(inputBox).appendChild(img);
    });

    notesContainer.addEventListener("click", function(e){
        if (e.target.tagName === "IMG") {
            e.target.parentElement.remove();
            updateStorege();
        }
        else if(e.target.tagName === "p"){
            notes = document.querySelectorAll(".input-box");
            notes.forEach(nt => {
                nt.onkeyup = function(){
                    updateStorege();
                }
            });
        }
    })

    function updateStorege(){
        localStorage.setItem("notes", notesContainer.innerHTML)
    }
    
    function showNotes() {
        notesContainer.innerHTML = localStorage.getItem("notes")
    }
    
    showNotes();
    
    document.addEventListener("keydown",event =>{
        if (event.key == "Enter") {
            document.execCommand("insertLineBreak")
            event.preventDefault();
        }
    });
});
