/* eslint-disable no-useless-escape */
import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function AddMovie() {
    const { setIsAdding, addMovie } = useContext(MovieContext);

    const [name, setName] = useState("");
    const [summary, setSummary] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState("");

    const validateForm = () => {
        const urlRegex =
            /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
        if (name === "") {
            alert("Please enter a movie name");
            return false;
        }
        if (!urlRegex.test(image)) {
            alert("Please enter a valid image URL");
            return false;
        }
        if (summary === "") {
            alert("Please enter a movie summary");
            return false;
        }
        if (type === "") {
            alert("Please select a movie type");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newMovie = {
            show: {
                name,
                summary,
                type,
                image: {
                    medium: image,
                },
            },
        };
        if (validateForm()) {
            addMovie(newMovie);
        }
    };

    return (
        <section className="modal-container">
            <div className="form-modal-content">
                <header className="modal-header">
                    <h1>Add Movie</h1>
                    <button
                        className="modal-close"
                        onClick={() => setIsAdding()}
                    >
                        &times;
                    </button>
                </header>
                <section className="form-modal-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input
                                type="text"
                                id="image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="summary">Summary</label>
                            <textarea
                                id="summary"
                                value={summary}
                                onChange={(e) => setSummary(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Type</label>
                            <select
                                id="type"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="">Select Type</option>
                                <option value="Reality">Reality</option>
                                <option value="Scripted">Scripted</option>
                            </select>
                        </div>
                        <button className="form-button" onClick={handleSubmit}>
                            Add Movie
                        </button>
                    </form>
                </section>
            </div>
        </section>
    );
}

export default AddMovie;
