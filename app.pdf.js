// if user adds a note add it to the  local storage

/* This is a function that is called when the user clicks the add button. It takes the value of the
text box and adds it to the local storage. */
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function () {
    let notesObj = [];
  let addTxt = document.getElementById("addtxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
   notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  console.log(notesObj);
  showNotes();
});
// show elements from local storage
/**
 * The function showNotes() is used to display the notes that are stored in the local storage.
 */
function showNotes() {
   let notesObj = [];
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div class = "noteCard my-2 mx-2 card" style = "width : 18rem;">
                <div class = "card-body">
                <h5 class = "card-title">Note ${index + 1}</h5>
                <p class = "card-text"> ${element}</p>
                <button id = "${index}" onclick = "deleteNote(this.id)" class = "btn btn-primary">Delete Note</button>
                </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `nothing to show ! use"Add a Note" section above to add notes.`;
  }
}
// function to delete a note
/**
 * It takes the index of the note to be deleted and then deletes it from the local storage.
 * @param index - The index of the element you want to remove.
 */
function deleteNote(index) {
    let notesObj = [];
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

/* A function that is called when the user types in the search box. It takes the value of the search
box and compares it to the text in the notes. If the text in the notes includes the text in the
search box, it displays the note. If not, it hides the note. */
/* A function that is used to search for a note. */
/* A function that is called when the user types in the search box. It takes the value of the search
box and compares it to the text in the notes. If the text in the notes includes the text in the
search box, it displays the note. If not, it hides the note. */
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();

  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});



