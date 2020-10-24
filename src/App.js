import React from 'react';
import { BrowserRouter as Router , Switch , Route , Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import India from './Components/India';
import World from './Components/World';
import Header from './Components/Header';
import Statedata from './Components/Statedata';



function App() {
  return (
    <div className="App ">

      <Router>
           <Header/>
         <Switch>
            
             <Route exact path="/">
               <India/>
             </Route>
             <Route path="/india">
               <India/>
             </Route>

             <Route path="/world">

               <World/>
             </Route>
             <Route path="/statedata">
               <Statedata/>
             </Route>

        </Switch>

      </Router>


    </div>
  );
}

export default App;
