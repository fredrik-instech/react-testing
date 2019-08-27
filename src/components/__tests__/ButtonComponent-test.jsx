import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// Import the component to test
import { ButtonComponent } from '../ButtonComponent';

afterEach(cleanup);

test('Expect normal rendering', () => {
  const mockFunc = jest.fn().mockImplementation();
  // Render
  const { getByText } = render(<ButtonComponent onClick={mockFunc} />);
  
  expect(mockFunc).toHaveBeenCalledTimes(0)
  // Act
  fireEvent.click(getByText('Click me!'));
  
  // Assert
  expect(mockFunc).toHaveBeenCalledTimes(1)
});