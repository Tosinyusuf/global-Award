import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export const Terms = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
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
        <div>
            <h1>Terms</h1>
                <p className="container">you are only permited to nominate a maximum of five movies, after your nominees exceeds five. you are exempted from nominating further.</p>
        </div>
        </>
    )
}
