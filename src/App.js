import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";

const NOTES = [];
const App = () => {
  const [notes, setNotes] = useState(NOTES);
  const [selectedNote, setSelectedNote] = useState({});
  const [dynamicNote, setDynamicNote] = useState({});
  const [isModalOpen, setisModalOpen] = useState(false);

  //ADD NOTE FUNCTION
  const addNote = (note) => {
    if (note.text || note.title !== "") {
      setNotes((prevState) => {
        return [...prevState, note];
      });
    }
  };
  //DELETE NOTE FUNCTION
  const deleteNote = (id) => {
    setNotes((prevState) => {
      return prevState.filter((note) => id !== note.id);
    });
  };
  //EDIT NOTE FUNCTION
  const editNote = (editedNote) => {
    setNotes((prevNotes) => {
      const newArray = prevNotes.map((note) => {
        if (editedNote.id === note.id) {
          note.title = editedNote.title;
          note.text = editedNote.text;
        }
        return note;
      });
      return newArray;
    });
  };
  //TOGGLE MODAL FUNCTION
  const toggleModal = () => {
    setisModalOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
        setSelectedNote={setSelectedNote}
        setisModalOpen={setisModalOpen}
      />
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          selectedNote={selectedNote}
          toggleModal={toggleModal}
          editNote={editNote}
          setDynamicNote={setDynamicNote}
          dynamicNote={dynamicNote}
        />
      )}
    </div>
  );
};

export default App;
