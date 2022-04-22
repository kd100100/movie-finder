import React from "react";

function MovieCard({ movie, openModal, newMovieRef }) {
    const img = movie.show.image && movie.show.image.medium;
    const name = movie.show.name;

    return (
        <section className="movie-card">
            <img src={img} alt={name} className="movie-image" ref={newMovieRef} />
            <h1>{name}</h1>
            <button className="book-now-button" onClick={openModal}>View Details</button>
        </section>
    );
}

export default MovieCard;
