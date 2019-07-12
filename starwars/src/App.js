import React, { useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Characters from './components/Characters'

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

  console.log(character)
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Characters character={character} />
    </div>
  );
}

export default App;
