import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { DeleteTable } from '../DeleteTable';

//test that table is created correctly
//test that delete button works

test('renders learn react link', () => {
  const { getByText } = render(<DeleteTable />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
