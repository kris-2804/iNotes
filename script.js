
const addNoteBtn = document.getElementById('Addnotebtn');
var deleteNoteBtn;
const noteTitle = document.getElementById('noteTitle');

const noteText = document.getElementById('noteText');
const noteContainer = document.getElementById('showNotes');
const searchText = document.getElementById('searchBar');
const SearchBtn = document.getElementById('searchbtn');
var Cardtext





var NotesArray = [];
console.log(NotesArray)
console.log('Hello World')
console.log(addNoteBtn)

window.onload = showNotes();
window.onload = Delete();

addNoteBtn.addEventListener('click', (e) => {

    e.preventDefault();
    if (!noteText.value || !noteTitle.value) {
        alert("Enter COrrect Values and try Again");
        return
    }
    noteContainer.innerHTML += ` <div class="card m-2" style="width: 18rem;  ">
    
    <div class="card-body">
    <h5 class="card-title">${noteTitle.value}</h5>
    <p class="card-text">${noteText.value}</p>
    <a href="" class="btn btn-primary deletebtn"  >Delete Note</a>
    </div>
    
    </div>`

    NotesArray.push({
        title: noteTitle.value,
        desc: noteText.value
    })
    localStorage.setItem("notes", JSON.stringify(NotesArray));
    noteText.value = "";
    noteTitle.value = "";

    Delete()
})

function showNotes() {
    console.log("Hello")
    if (localStorage.getItem('notes') === null) {
        noteContainer.innerHTML = ""
        return
    }
    else {
        NotesArray = JSON.parse(localStorage.getItem('notes'))
        console.log(NotesArray)
        NotesArray.forEach((elem, index) => {
            noteContainer.innerHTML += `<div class="card m-2" style="width: 18rem;  ">

            <div class="card-body">
            <h5 class="card-title">${NotesArray[index].title}</h5>
            <p class="card-text">${NotesArray[index].desc}</p>
            <a href="" class="btn btn-primary deletebtn" >Delete Note</a>
            </div>
            
            </div>`

        });
    }


}


SearchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(searchText.value)
    if(searchText.value===""||searchText.value===null){
        alert("Enter A valid string");
        return
    }
Cardtext = document.querySelectorAll('.card-text');
console.log(Cardtext)
Cardtext.forEach((elem,index,arr)=>{
   if(elem.textContent.includes(searchText.value)){
       console.log(elem)
       elem.parentNode.style.display="block"
   }
   else{
       elem.parentNode.style.display="none"
   }
})

})
function Delete() {
    console.log('Called Delete')
    Cardtext = document.querySelectorAll('.card-text');
    const buttonarr = document.querySelectorAll('.deletebtn');
    buttonarr.forEach((elem, index, arr) => {
        elem.addEventListener('click', (e) => {
            e.preventDefault()
            console.log('Delte Button Clicked')
            elem.parentElement.style.display = "none";

            let newItem = JSON.parse(localStorage.getItem('notes'));
           
           index===0?newItem=[]: newItem.splice(index, 1);
            localStorage.setItem('notes', JSON.stringify(newItem))
            console.log(newItem)
        })
    })

    console.log(buttonarr)
    // showNotes()

}