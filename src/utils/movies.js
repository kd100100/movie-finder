const filterMovies = (movies, searchQuery) => {
    return movies.filter((movie) => {
        return movie.show.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
    });
};

const compare = (a, b) => {
    if (a.show.name.toLowerCase() < b.show.name.toLowerCase()) {
        return -1;
    }
    if (a.show.name.toLowerCase() > b.show.name.toLowerCase()) {
        return 1;
    }
    return 0;
};

const sortMovies = (movies, sortOrder) => {
    if (sortOrder === "ascending") {
        return movies.sort(compare);
    } else {
        return movies.sort(compare).reverse();
    }
};

const typeFilter = (movies, type) => {
    return movies.filter((movie) => {
        return movie.show.type === type;
    });
};

export const prepareMovies = (movies, searchQuery, sortOrder, type) => {
    var movieData = movies;
    if (searchQuery !== "") {
        movieData = filterMovies(movieData, searchQuery);
    }
    if (type !== "All") {
        movieData = typeFilter(movieData, type);
    }
    movieData = sortMovies(movieData, sortOrder);
    return movieData;
};
