import "./Modal.css";
import Form from "../Form/Form";
const Modal = (props) => {
    const { isModalOpen, selectedNote, toggleModal, editNote } = props;
    return (
        <div>
            <div className={`modal ${isModalOpen ? "open-modal" : ""}`}>
                <div className="modal-content">
                    <Form
                        selectedNote={selectedNote}
                        toggleModal={toggleModal}
                        editNote={editNote}
                        isModalOpen={isModalOpen}
                        edit
                    />
                </div>
            </div>
        </div>
    );
};
export default Modal;
