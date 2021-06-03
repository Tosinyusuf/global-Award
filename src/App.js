import React  from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import { NominateMovies } from './components/NominateMovies';
import { Terms } from './components/Terms';
import { Nominees } from './components/Nominees';
import { Intro } from './components/Intro';
import "./App.css";
import { GlobalProvider } from './context/GlobalState';

function App(props) {
    return (
        <GlobalProvider> 
        <Router>
        
        <Route exact path="/" render= {props => (
                    <React.Fragment>
                       <Intro />
                       
                    </React.Fragment>
                )}  />
                    <Route exact path="/Nominee">
                        
                           <Nominees />
                        </Route>
                        <Route exact path="/NominateMovies">
                           <NominateMovies />
                        </Route>
                        <Route  path="/Terms">
                            <Terms />
                        </Route>
               
            </Router>
        </GlobalProvider>
       
    )
}
export default App;
