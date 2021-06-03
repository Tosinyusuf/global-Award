export default (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_NOMINEES":
            return {
                ...state,
                Nominees: [action.payload, ...state.Nominees],
            };
        case "REMOVE_MOVIE_FROM_NOMINEES":
            return {
                ...state,
                Nominees: state.Nominees.filter(movie => movie.imdbID !== action.payload)
            }
        default:
        return state;
    }
};