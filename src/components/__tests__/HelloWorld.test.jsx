import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// Import the component to test
import { HelloWorld } from '../HelloWorld';


afterEach(cleanup);


test('Expect normal rendering', () => {
  // Render
  const { getByText, debug, container } = render(<HelloWorld />);
  
  // Act
  debug()
  // Assert
  expect(getByText('Hello World!')).toBeInTheDocument();

});