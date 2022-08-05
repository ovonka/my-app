import { uid } from 'uid';
import React, { useState } from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import "./Form.css";

const Form = (props) => {
    const { edit, selectedNote, toggleModal, addNote } = props;
    const [title, setTitle] = useState((edit && selectedNote.title) || "");
    const [text, setText] = useState((edit && selectedNote.text) || "");
    const [isActiveform, setisActiveform] = useState(edit);


    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const textChangeHandler = (event) => {
        setText(event.target.value);
        setisActiveform(true);
    };
    const submitFormHandler = (event) => {
        event.preventDefault();
        if (!edit) {
            addNote({
                id: uid(),
                title,
                text,
            });
            setisActiveform(false);
        } else {
            props.editNote({
                id: selectedNote.id,
                title,
                text
            });
            toggleModal();
        }
        setTitle("");
        setText("");
    };
    const formClickHandler = () => {
        setisActiveform(true);
    }
    const outsideFormClick = () => {
        if (!edit) {
            addNote({
                id: uid(),
                title,
                text,
            });
            setisActiveform(false);
        } else {
            props.editNote({
                id: selectedNote.id,
                title,
                text
            });
            toggleModal();
        }
        setTitle("");
        setText("");
    }

    return (
        <div >
            <OutsideClickHandler onOutsideClick={outsideFormClick}>
                <div className="form-container active-form" onClick={formClickHandler}
                >
                    <form
                        onSubmit={submitFormHandler}
                        className={isActiveform ? "form" : ""}
                    >
                        {isActiveform && (
                            <input
                                onChange={titleChangeHandler}
                                value={title}
                                id="note-title"
                                className="note-title note-text"
                                type="text"
                                placeholder="Title"
                            />
                        )}
                        <input
                            onChange={textChangeHandler}
                            value={text}
                            id="note-text"
                            className="note-text"
                            type="text"
                            placeholder="Take a note..."
                        />
                        {isActiveform ? (
                            <div className="form-actions">
                                <div className="icons">
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

                                        <span className="tooltip-text">Change color</span>
                                    </div>
                                    <div className="tooltip">
                                        <span className="material-icons-outlined hover small-icon">
                                            image
                                        </span>

                                        <span className="tooltip-text">Add image</span>
                                    </div>
                                    <div className="tooltip">
                                        <span className="material-icons-outlined hover small-icon">
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
                                    <div className="tooltip">
                                        <span className="material-icons-outlined hover small-icon">
                                            undo
                                        </span>

                                        <span className="tooltip-text">Undo</span>
                                    </div>
                                    <div className="tooltip">
                                        <span className="material-icons-outlined hover small-icon">
                                            redo
                                        </span>

                                        <span className="tooltip-text">Redo</span>
                                    </div>
                                </div>
                                <button className="close-btn">Close</button>
                            </div>
                        ) : (
                            <div className="form-actions">
                                <div className="tooltip">
                                    <span className="material-icons-outlined hover">check_box</span>
                                    <span className="tooltip-text">New List</span>
                                </div>
                                <div className="tooltip">
                                    <span className="material-icons-outlined hover">brush</span>
                                    <span className="tooltip-text">New Drawing</span>
                                </div>
                                <div className="tooltip">
                                    <span className="material-icons-outlined hover">image</span>
                                    <span className="tooltip-text">New Image</span>
                                </div>
                            </div>
                        )}
                    </form>


                </div>
            </OutsideClickHandler>


        </div>
    );
};
export default Form;
