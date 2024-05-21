const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes(); 

function updatesStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () =>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.classList = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "./bin.jpeg";
    notesContainer.appendChild(inputBox).appendChild(img);
}) 

notesContainer.addEventListener("click", function(e){
   if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updatesStorage()
   }
   else if(e.target.tagName === "P"){
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt =>{
        nt.onkeyup = function(){
            updatesStorage()
        }
    })
   }
})