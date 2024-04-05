showNotes();
const title = document.querySelector("#title");
const textArea = document.querySelector("#note-text");
const subject = document.querySelector("#text"); 
const button = document.querySelector(".note-btn");
button.addEventListener("click", function (e) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let myObj = {
        title: title.value,
        textArea: textArea.value,
        subject: subject.value 
    }
    
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    textArea.value = '';
    title.value = '';
    subject.value = ''; 
    showNotes();
});

function showNotes() {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = '';
    notesObj.forEach(function (element, index) {
            html += `
        <div>
        <div class="card">
            <h2>${element.textArea} </h2>
            <p>${element.title}</p>
            <p>Subject: ${element.subject}</p> <!-- Added subject display -->
            <button onClick="deleteNote(this.id)" id="${index}" class="deleteBtn">Delete Note</button>
        </div>
        </div>`;
    });

    let insertNotes = document.getElementById("notes");
    if (notesObj.length == 0) {
        
        insertNotes.innerHTML = `Nothing to show! Please click on "Schedule Batch" button to add a new class.`
        insertNotes.style.color = "gray";
        insertNotes.style.paddingTop = "10px";
        insertNotes.style.fontSize = "15px";
    } else {
        insertNotes.innerHTML = html;
    }
}


function deleteNote(index) {
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


let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function () {
    let inputVal = searchTxt.value;
    console.log("input event fired", inputVal);
    let cards = document.getElementsByClassName("card");
    Array.from(cards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('h2')[0].innerHTML;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
})
function redirectToLoginPage() {
    window.location.href = "student_schedule.html";
}
function redirectToRegisterPage() {
    window.location.href = "register.html";
}
function registerUser(event) {
    event.preventDefault();
    var form = document.getElementById("registrationForm");
    var name = form.elements["name"].value;
    var email = form.elements["email"].value;
    var mobile = form.elements["password"].value;
    var mobile = form.elements["mobile"].value;
    var mobile = form.elements["class"].value;
    

    // Display registration message
    var messageDiv = document.getElementById("message");
    messageDiv.textContent = "Registration successful...";
    messageDiv.style.display = "inline";
    messageDiv.style.border = "none";
    

    // Clear form fields
    form.reset();
}
function registerUse(event) {
    event.preventDefault();
    var form = document.getElementById("studentLoginForm");
    var name = form.elements["studentUsername"].value;
    var mobile = form.elements["studentPassword"].value;

    form.reset();
}

