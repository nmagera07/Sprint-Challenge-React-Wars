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
    const tree= renderer.create(<Characters />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})