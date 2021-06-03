import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const ResultCard = ({movie}) => {

    const { addMovietoNominees, Nominees } = useContext(GlobalContext);

    let checkMovie = Nominees .find(o => o.imdbID === movie.imdbID);


    const nominatedDisabled = checkMovie ? true : Nominees.length > 4 ? true : false;
    return (
        
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.Poster ? (
                    <img src={movie.Poster} alt= {movie.Title}/>
                ) : (
                <div className="filler-poster"></div>
                )}
            </div>
            
            <div className="info">
                <div className="header">
                    <h3 className="title">
                        {movie.Title}
                    </h3>
                    <h4 className="release-date">{movie.Year}</h4>
                </div>
            

                <div className="controls">
                    <button 
                    className="btn"
                    disabled = {nominatedDisabled} 
                    onClick={() => addMovietoNominees(movie)}
                    >
                        Add movie to nominee
                    </button>
                </div> 
            </div>
        </div>
    )
}
