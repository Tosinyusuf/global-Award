import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { MoviePage} from './MoviePage';
import { Link } from 'react-router-dom';


export const Nominees = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const { Nominees } = useContext(GlobalContext)
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
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">
                        Nominees
                    </h1>
                </div>

                {Nominees.length > 0 ? (
                    <div className="movie-grid">
                    {Nominees.map((movie) => (
                        <MoviePage movie={movie} />
                    ))}
                </div>
                ) : (
                   <h2 className="no-movies">you have not nominated any movies yet, add some!</h2>
                )}
                
            </div>      
        </div>
        </>
    );
};
