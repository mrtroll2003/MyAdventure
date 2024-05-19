import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../../component/Header';

jest.mock('react-router-dom', () => ({
  Link: ({ children }) => children,
}));

describe('Header', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Get to know us')).toBeInTheDocument();
  });

  it('renders email link', () => {
    const { getByText } = render(<Header />);
    const email = getByText('myadvanture@gmail.com');
    expect(email).toBeInTheDocument();
  });

  it('renders phone number link', () => {
    const { getByText } = render(<Header />);
    const phoneNumber = getByText('(+89) 123456789');
    expect(phoneNumber).toBeInTheDocument();
  });
});