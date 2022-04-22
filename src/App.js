import React, { useEffect, useContext } from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import { MovieContext } from "./context/MovieContext";

import "./assets/Header.css";
import "./assets/Movies.css";
import "./assets/Modal.css";
import "./assets/Pagination.css";
import "./assets/Responsiveness.css";

function App() {    
    const { setRawMovies } = useContext(MovieContext)
    
    // Data Fetching
    useEffect(() => {
        async function getUsers() {
            let movies = await fetch("https://api.tvmaze.com/schedule");
            let movieData = await movies.json();
            setRawMovies(movieData);
        }
        getUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            <Movies />
            <Footer />
        </>
    );
}

export default App;
