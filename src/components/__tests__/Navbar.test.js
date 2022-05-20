import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Header/Navbar';

describe('Test presence of navigation header', () => {
  test('renders the navigation correctly', () => {
    const navComponent = renderer
      .create(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>,
      )
      .toJSON();
    expect(navComponent).toMatchSnapshot();
  });
});
