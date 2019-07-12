import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer'
import Characters from './components/Characters'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
  it('should match snapshot', () => {
  const tree = renderer.create(<App />).toJSON()

  expect(tree).toMatchSnapshot()
  })
})

describe('<Characters />', () => {
  it('should match snapshot', () => {
    const tree= renderer.create(<Characters character={ dataArray }/>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})


const dataArray = [{birth_year: "19BBY",
created: "2014-12-09T13:50:51.644000Z",
edited: "2014-12-20T21:17:56.891000Z",
eye_color: "blue",
films: (5) ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"],
gender: "male",
hair_color: "blond",
height: "172",
homeworld: "https://swapi.co/api/planets/1/",
mass: "77",
name: "Luke Skywalker",
skin_color: "fair",
species: ["https://swapi.co/api/species/1/"],
starships: (2) ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"],
url: "https://swapi.co/api/people/1/",
vehicles: (2) ["https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"]}]