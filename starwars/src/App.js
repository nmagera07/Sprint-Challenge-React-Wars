import React, { useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Characters from './components/Characters'
import Nav from './components/Nav'
import DogAPI from './components/DogAPI'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [character, setCharacter] = useState([])


  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response)
        setCharacter(response.data.results)
      })
      .catch(error => console.log('things went south...way south'))
  }, [])

  
  return (
    <div className="App">
      <Router>
      <Route path="/" component={Nav} />
      <Route path="/characters" 
        render={props => 
          <Characters {...props} character={character} />
        }
        />
     <Route path="/dogAPI" component={DogAPI}></Route>
      </Router>
      
    </div>
  );
}

export default App;
