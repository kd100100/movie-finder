import React, { useState, useContext, useEffect, useRef } from "react";
import { MovieContext } from "../context/MovieContext";
import AddMovie from "./AddMovie";
import Modal from "./Modal";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

function Movies() {
    const { state, clearNewMovie } = useContext(MovieContext);

    const newMovieRef = useRef();
    const [viewingArrayIndex, setViewingArrayIndex] = useState();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [state.pageNumber]);

    useEffect(() => {
        if (!!newMovieRef.current && !!state.newMovie) {
            const { offsetTop } = newMovieRef.current;
            window.scrollTo({
                top: offsetTop - 200,
                behavior: "smooth",
            })
            clearNewMovie();
            newMovieRef.current = undefined;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.newMovie, newMovieRef.current]);

    const slicedMovies = state.movies.slice(
        state.pageNumber * state.pagePerItem - state.pagePerItem,
        state.pagePerItem * state.pageNumber
    );

    return (
        <main>
            <div id="movie-container" className="movies">
                {state.isAdding && <AddMovie />}
                {viewingArrayIndex !== undefined && (
                    <Modal
                        movie={state.movies[viewingArrayIndex]}
                        closeModal={() => setViewingArrayIndex()}
                    />
                )}
                {slicedMovies.map((movie, index) => {
                    if (movie.show.name === state.newMovie) {
                        return (
                            <MovieCard
                                key={index}
                                movie={movie}
                                openModal={() => setViewingArrayIndex(index)}
                                newMovieRef={newMovieRef}
                            />
                        );
                    }
                    return (
                        <MovieCard
                            key={index}
                            movie={movie}
                            openModal={() => setViewingArrayIndex(index)}
                        />
                    );
                })}
            </div>
            <Pagination />
        </main>
    );
}

export default Movies;
