import React from 'react';
import { MovieControls } from './MovieControls';
//   

export const MoviePage = ({movie}) => {
    return (
        <div className="movie-card">
            <div className="overlay">

            </div>
            {movie.Poster ? (
                    <img src={movie.Poster} alt= {movie.Title}/>
                ) : (
                <div className="filler-poster"></div>
            )}


        <MovieControls movie={movie} />
        </div>
    )
}
