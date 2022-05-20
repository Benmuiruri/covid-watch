import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('Test presence of App component', () => {
  test('renders the App component correctly', () => {
    const missionComponent = renderer.create(<App />).toJSON();
    expect(missionComponent).toMatchSnapshot();
  });
});
