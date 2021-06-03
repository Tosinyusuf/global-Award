import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';


const initialState = {
    Nominees : localStorage.getItem('Nominees') ? JSON.parse(localStorage.getItem('Nominees')) : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    useEffect(() => {
        localStorage.setItem('Nominees', JSON.stringify(state.Nominees)) 
    }, [state]);


    const addMovietoNominees =(movie) => {
        dispatch({type: "ADD_MOVIE_TO_NOMINEES", payload: movie})
    };

    const removeMovieFromNominees = (imdbID) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_NOMINEES", payload: imdbID })
    }
    return (
        <GlobalContext.Provider value={{Nominees: state.Nominees, addMovietoNominees, removeMovieFromNominees,}}>
            {props.children}
        </GlobalContext.Provider>
    )
}