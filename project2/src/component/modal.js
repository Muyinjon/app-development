function Modal({ isOpen, onClose, title, description, cardimg }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h1>{title}</h1>
                <img src={cardimg} alt="card" />
                <hr></hr>
                <p>{description}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;