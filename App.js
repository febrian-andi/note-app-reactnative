import React, { useState } from 'react';
import Home from './src/screens/Home';
import AddNote from './src/screens/AddNote';
import EditNote from './src/screens/EditNote';

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote, deleteNote, editNote, editNoteId, setEditNoteId }) => {
  switch (currentPage) {
    case 'home':
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} deleteNote={deleteNote} setEditNoteId={setEditNoteId} />;
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case 'edit':
      return <EditNote noteList={noteList} editNote={editNote} setCurrentPage={setCurrentPage} editNoteId={editNoteId} />;
    default:
      return <Home />;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [noteList, setNoteList] = useState([]);
  const [editNoteId, setEditNoteId] = useState(null);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title,
        desc,
      },
    ]);
  };

  const deleteNote = (id) => {
    const newNoteList = noteList.filter(note => note.id !== id);
    setNoteList(newNoteList);
  };

  const editNote = (id, title, desc) => {
    setNoteList(noteList.map((note) => (note.id === id ? { id, title, desc } : note)));
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      addNote={addNote}
      deleteNote={deleteNote}
      editNote={editNote}
      editNoteId={editNoteId}
      setEditNoteId={setEditNoteId}
    />
  );
};

export default App;
