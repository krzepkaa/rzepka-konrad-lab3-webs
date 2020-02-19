class Note {
  myStorage = localStorage;
  count;
  not;

    constructor() {
      this.count = 0;
      this.not = document.getElementById('note');
    }
  
      createNote(event) {

        this.count = ++this.count;

        let note = document.createElement('div');
        let bar = document.createElement('div');
        let titleOfNote = document.createElement('textarea');
        let textarea = document.createElement('textarea');
        let dateOfCreate= document.createElement('div');
        let removeNote = document.createElement('button');
        let saveNote = document.createElement('button');

        note.id = 'note_' + this.count;
        note.classList.add('note');
        dateOfCreate.classList.add('dateOfCreateNote');
        bar.classList.add('bar');
        textarea.classList.add('note-content');
        titleOfNote.classList.add('titleOfNote');
        removeNote.classList.add('removeNote');
        saveNote.classList.add('saveNote');

        note.appendChild(bar);
        note.appendChild(textarea);
        note.appendChild(dateOfCreate);
        note.appendChild(titleOfNote);
        note.appendChild(removeNote);
        note.appendChild(saveNote);
        
        
        removeNote.innerText="Usuń notatkę";
        saveNote.innerText = 'Zapisz';

        let transformCSSValue = "translateX(" + Math.random() * 400 + "px) translateY(" + Math.random() * 400 + "px)";

        note.style.transform = transformCSSValue;
  
        let Today = new Date()
        let textNotatki = "Data utworzenia notatki" + ' '+ Today.getDate() +'.'+ Today.getMonth()+1 +'.'+ Today.getFullYear()+' '+"Godzina"+' ' + Today.getHours()+':'+Today.getMinutes();
        dateOfCreate.innerText = textNotatki;
        
        

      removeNote.addEventListener('click', this.removeNote);
      saveNote.addEventListener('click', this.saveToStorage);

      document.body.appendChild(note);

      let noteId = 'note_' + this.count;
      console.warn('noteId: ', noteId);
      
      let notee = document.getElementById(noteId);
      console.warn('note: ', notee);
      let options = {
      };

      
      titleOfNote.innerText="Tytuł notatki";
      textarea.innerText="Treść notatki";
    
    }

    saveToStorage() {
      let bar = document.getElementsByClassName('titleOfNote');
      let barText = bar[0].value;

      let content = document.getElementsByClassName('note-content');
      let contentText = content[0].value;


      console.warn('check: ', bar, content, barText, contentText);
      localStorage.setItem(barText, contentText, this.note, JSON.stringify(this.not));

      this.not = document.getElementById('note');
    }

    removeNote(event){
      let target = event.target;
      console.warn('Usunięta notatka ->', target);

      let closestNote = target.closest('.note')
      console.warn('id: ', closestNote);
      
      document.body.removeChild(closestNote); 
    }
  
}

