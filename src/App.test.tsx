import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders task title & description', () => {
  render(<App />);
  const titleElement = screen.getByText(/Test task 1/i);
  const descriptionElement = screen.getByText(/Task description/i);
  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});

test('renders loading state by default', () => {
  render(<App />);
  const loaderElement = screen.getByText('Loading...');
  expect(loaderElement).toBeInTheDocument();
});

test('call fetch function and render results', async () => {
  const fetchMock = jest.spyOn(global, 'fetch');

  render(<App />);

  expect(fetchMock).toHaveBeenCalledTimes(1);

  expect(await screen.findByText(/sunt aut facere repellat provident occaecati excepturi optio reprehenderit/i)).toBeInTheDocument();
});
