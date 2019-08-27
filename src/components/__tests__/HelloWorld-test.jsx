import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// Import the component to test
import { HelloWorld } from '../HelloWorld';


afterEach(cleanup);


test('Expect normal rendering', () => {
  // Render
  const { getByText } = render(<HelloWorld />);
  
  // Act

  // Assert
  expect(getByText('Hello World!')).toBeInTheDocument();

});