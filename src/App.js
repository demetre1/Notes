import{nanoid} from 'nanoid'
import { useState,useEffect } from 'react';
import './App.css';
import Header from './Components/Header';

import NotesList from './Components/NontesList';
import Search from './Components/search';

function App() {
const [notes,setNotes] = useState([
  {
  id: nanoid(),
  text:"this is some nice text",
  date: "13/23/2022"
}

]);
 const [notesText,setNotesText] = useState('')
 const [darkMode,SetDarkMode] = useState(false)
useEffect(()=>{
  const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
  if(savedNotes){
    setNotes(savedNotes)
  }
},[])

 useEffect(()=>{
  localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
 },[notes])

const addNote=(text)=>{
  const date = new Date();
  const newNote ={
    id:nanoid(),
    text: text,
    date: date.toLocaleDateString(),

  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);


}

 const deleteNote = (id)=>{
  const newNotes = notes.filter((note => note.id !== id));
  setNotes(newNotes);
  }
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={SetDarkMode}/>
        <Search handleSearchNote={setNotesText}/>
        <NotesList 
        notes={notes.filter((note)=>note.text.toLocaleLowerCase().includes(notesText))} 
        handleAddNote={addNote} 
        deleteNote ={deleteNote}/>

      </div>
     
    </div>
 
  );
}

export default App;
