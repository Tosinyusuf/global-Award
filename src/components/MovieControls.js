import React, {useContext} from 'react';
import { GlobalContext} from '../context/GlobalState'

export const MovieControls = ({movie}) => {

    const {removeMovieFromNominees} = useContext(GlobalContext);
    return (
       <div className="inner-card-controls">
           <button 
           className="btn"
           onClick={() => removeMovieFromNominees(movie.imdbID) }
           >delete</button>
       </div>
    )
}
