import React, { useState } from "react";
const Note = (props) => {
  const { note, toggleModal, setSelectedNote } = props;
  const [isIconsHover, setisIconHover] = useState(false);

  const handleMouseOverNote = () => {
    setisIconHover(true);
  };
  const handleMouseOutNote = () => {
    setisIconHover(false);
  };
  //DELETING NOTE
  const handleArchive = () => {
    props.setisModalOpen(true);
    props.deleteNote(note.id);
  };
  //MODAL POP-UP
  const noteClickHandler = () => {
    toggleModal();
    setSelectedNote(note);
  }
  return (
    <div>
      <div
        className="note"
        id="note.id"
        onMouseEnter={handleMouseOverNote}
        onMouseLeave={handleMouseOutNote}
        onClick={noteClickHandler}
      >
        {isIconsHover && (
          <span className="material-icons check-circle">check_circle</span>
        )}
        <div className="title">{note.title}</div>
        <div className="text">{note.text}</div>
        <div
          className="note-footer"
          style={{ visibility: isIconsHover ? "visible" : "hidden" }}
        >
          <div className="tooltip">
            <span className="material-icons-outlined hover small-icon">
              add_alert
            </span>

            <span className="tooltip-text">Remind me</span>
          </div>
          <div className="tooltip">
            <span className="material-icons-outlined hover small-icon">
              person_add
            </span>

            <span className="tooltip-text">Collaborator</span>
          </div>
          <div className="tooltip">
            <span className="material-icons-outlined hover small-icon">
              palette
            </span>

            <span className="tooltip-text">Change Color</span>
          </div>
          <div className="tooltip">
            <span className="material-icons-outlined hover small-icon">
              image
            </span>

            <span className="tooltip-text">Add Image</span>
          </div>
          <div className="tooltip archive" >
            <span className="material-icons-outlined hover small-icon" onClick={handleArchive}>
              archive
            </span>
            <span className="tooltip-text">Archive</span>
          </div>
          <div className="tooltip">
            <span className="material-icons-outlined hover small-icon">
              more_vert
            </span>

            <span className="tooltip-text">More</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Note;
