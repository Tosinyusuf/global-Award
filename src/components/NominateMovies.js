import React, { useState } from 'react';
import { ResultCard } from './ResultCard';
import { Link } from 'react-router-dom';

export const NominateMovies = () => {
    const [searching, setSearching] = useState(false);
    const [message, setMessage] = useState(null);
    const [query, setQuery] = useState('');
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [movies, setMovies] = useState([]);
    const searchMovies = async(e) =>{
        e.preventDefault();
        setSearching(true);
        const url = `http://www.omdbapi.com/?&apikey=c5b0e5f8&s=${query}&type="movie"`;
         try{
            const response = await fetch(url);
            const data = await response.json();
            setMessage(null);
            setMovies(data.Search);
            setSearching(false);
         }catch(err){
            setMessage('An unexpected error occured.')
            setSearching(false);
         }
    }
    return (
        <>
        <header>
        <div className="inner-content">
                    <div className ='navbar-logo'>
                        GLOBAL MOVIES AWARDS
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                         <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                     </div>

                   <ul  className ={click ? 'nav-menu active' : 'nav-menu'}>
                       <li className = 'nav-item'>
                           <Link to="/Nominee" className ='nav-links'>Nominees</Link>
                       </li>

                       <li className = 'nav-item'>
                           <Link to="/NominateMovies" className ='nav-links'>Nominate a Movie</Link>
                       </li>

                       <li className = 'nav-item'>
                           <Link to="/Terms" className ='nav-links'>Terms and Condition</Link>
                       </li>
                   </ul>
                </div>
        </header>
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                       <form  onSubmit={searchMovies}>
                            <input type="text" name="query" placeholder="Search movies by name..."
                              value={query} onChange={(e) =>setQuery(e.target.value)}/>
               
                                 <button type="submit" className="btn">
                                   Search
                               </button>
                        </form>
                    </div>

                    {searching ?( <span> loading... </span>): (
                                    <ul className="results">
                                    {movies.map((movie, index) =>(
                                        <li key={index}>
                                            <ResultCard movie={movie}/>
                                        </li>
            
                                    ))}
                                </ul>
                    )}
                </div>
            </div>
        </div>
         </>

    )
};
