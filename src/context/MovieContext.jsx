import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";

export const MovieContext = createContext(initialState);

export const MovieProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setRawMovies = (rawMovies) => {
        dispatch({
            type: "SET_RAW_MOVIES",
            payload: rawMovies,
        });
    }
    const setSearch = (search) => {
        dispatch({
            type: "SET_SEARCH",
            payload: search,
        });
    }
    const setSortOrder = (sortOrder) => {
        dispatch({
            type: "SET_SORT_ORDER",
            payload: sortOrder,
        });
    }
    const setType = (type) => {
        dispatch({
            type: "SET_TYPE",
            payload: type,
        });
    }
    const setIsAdding = () => {
        dispatch({
            type: "SET_IS_ADDING",
        });
    }
    const addMovie = (movie) => {
        dispatch({
            type: "ADD_MOVIE",
            payload: movie,
        });
    }
    const clearNewMovie = () => {
        dispatch({
            type: "CLEAR_NEW_MOVIE",
        });
    }
    const setPageNumber = (pageNumber) => {
        dispatch({
            type: "SET_PAGE_NUMBER",
            payload: pageNumber,
        });
    }
    const setPagePerItem = (pagePerItem) => {
        dispatch({
            type: "SET_PAGE_PER_ITEM",
            payload: pagePerItem,
        });
    }

    const value = {
        state,
        setRawMovies,
        setSearch,
        setSortOrder,
        setType,
        setIsAdding,
        addMovie,
        clearNewMovie,
        setPageNumber,
        setPagePerItem,
    }

    return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};

