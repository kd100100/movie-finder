import { prepareMovies } from "../utils/movies";

export const initialState = {
    rawMovies: [],
    movies: [],
    search: "",
    type: "All",
    sortOrder: "ascending",
    isAdding: false,
    newMovie: null,
    pagePerItem: 8,
    pageNumber: 1,
    totalPages: 1,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_RAW_MOVIES":
            const movies = prepareMovies(action.payload, state.search, state.sortOrder, state.type);
            return {
                ...state,
                rawMovies: action.payload,
                movies: movies,
                totalPages: Math.ceil(movies.length / state.pagePerItem),
                pageNumber: 1,
            };
        case "SET_SEARCH":
            const searchMovies = prepareMovies(state.rawMovies, action.payload, state.sortOrder, state.type);
            return {
                ...state,
                search: action.payload,
                movies: searchMovies,
                totalPages: Math.ceil(searchMovies.length / state.pagePerItem),
                pageNumber: 1,
            };
        case "SET_SORT_ORDER":
            const sortMovies = prepareMovies(state.rawMovies, state.search, action.payload, state.type);
            return {
                ...state,
                sortOrder: action.payload,
                movies: sortMovies,
            };
        case "SET_TYPE":
            const typeMovies = prepareMovies(state.rawMovies, state.search, state.sortOrder, action.payload);
            return {
                ...state,
                type: action.payload,
                movies: typeMovies,
                totalPages: Math.ceil(typeMovies.length / state.pagePerItem),
                pageNumber: 1,
            };
        case "SET_IS_ADDING":
            return {
                ...state,
                isAdding: !state.isAdding,
            };
        case "ADD_MOVIE":
            const movieName = action.payload.show.name;
            const rawMovies = [...state.rawMovies, action.payload];
            const newMovies = prepareMovies(rawMovies, state.search, state.sortOrder, state.type);
            return {
                ...state,
                rawMovies: rawMovies,
                movies: newMovies,
                isAdding: false,
                newMovie: movieName,
                totalPages: Math.ceil(newMovies.length / state.pagePerItem),
                pageNumber: 1,
            };
        case "CLEAR_NEW_MOVIE":
            return {
                ...state,
                newMovie: null,
            };
        case "SET_PAGE_NUMBER":
            return {
                ...state,
                pageNumber: action.payload,
            };
        case "SET_PAGE_PER_ITEM":
            return {
                ...state,
                pagePerItem: action.payload,
                pageNumber: 1,
                totalPages: Math.ceil(state.movies.length / action.payload),
            };
        default:
            throw new Error();
    }
};