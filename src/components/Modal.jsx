import React from "react";

function Modal({ movie, closeModal }) {
    const img = movie.show.image && movie.show.image.medium;
    const name = movie.show.name;
    const summary = movie.show.summary;
    const type = movie.show.type;

    return (
        <section className="modal-container">
            <div className="modal-content">
                <header className="modal-header">
                    <h1>{name}</h1>
                    <button className="modal-close" onClick={closeModal}>
                        &times;
                    </button>
                </header>
                <section className="modal-body">
                    <img src={img} alt={name} className="modal-image" />
                    <div className="modal-text">
                        <div dangerouslySetInnerHTML={{ __html: summary }} />
                        <div>
                            <b>Type: </b>
                            {type}
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Modal;
