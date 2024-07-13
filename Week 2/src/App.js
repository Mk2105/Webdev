import React, { useState } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import './App.css';

function App() {
  const [notes, setNotes]= useState([]);
  const [showform, setShowform] = useState(false);

const addNote= (note)=>{
  setNotes([...notes,note]);
  setShowform(false);
}
  
    const deleteNote = (index) => {
      const newNotes = notes.filter((note, i) => i !== index);
      setNotes(newNotes);
    };
    const [darkMode, setDarkMode] = useState(false);
    
    const toggleTheme = () => {
      setDarkMode(!darkMode);
      const htmlElement = document.querySelector('html');
      htmlElement.setAttribute('data-bs-theme', 
      darkMode? 'light': 'dark' );
    };
  
  
  return (
    <div className={`App ${darkMode ? 'theme-dark' : 'theme-light'}`}>
      <div className="head rounded border-bottom border-primary bg-primary-subtle border-5 ">
      
      <div className='text-start p-3'>
      <button variant="primary" onClick={toggleTheme}>
          {darkMode ? 'Light mode' : 'Dark Mode'}
        </button>
        </div>

        <h1 className="display-1 fw-bold text-primary m-1 p-3">SnapNotes</h1>
       </div>

     
     <button className="btn btn-primary mt-3" onClick={()=> setShowform(!showform)}>{showform ? 'Back' : 'New note'}</button>
    
     {showform && <NoteForm addNote={addNote} />}

     <NoteList notes={notes} deleteNote={deleteNote} />
   

    
        
  </div>
  );
}

export default App;
