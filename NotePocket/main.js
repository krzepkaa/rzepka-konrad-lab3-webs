document.addEventListener('DOMContentLoaded', StartMyApp)

function StartMyApp() {
    let yourNote = new Note();

    document.querySelector('#plus').addEventListener('click',  ()=>yourNote.createNote(), false)
   
}
