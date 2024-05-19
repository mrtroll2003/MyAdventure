import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import TourContainerCompany from '../../component/TourContainerCompany/index.js';

describe('TourContainerCompany', () => {
  const mockProps = {
    departure: 'Hanoi',
    destination: 'Ho Chi Minh City',
    departureDate: new Date(),
    returnDate: new Date(),
    numAdult: 2,
    numChild: 1,
    tourStatus: 'Confirmed',
    bookingDate: new Date(),
    color: '#99FFCD',
    fullName: 'John Doe',
    phone: '123456789',
    type: 'booking',
    key: '1',
    id: '1'
  };

  it('renders without crashing', () => {
    const { getByText } = render(<Router><TourContainerCompany {...mockProps} /></Router>);
    expect(getByText('John Doe')).toBeInTheDocument();
  });

  it('renders the departure and destination', () => {
    const { getByText } = render(<Router><TourContainerCompany {...mockProps} /></Router>);
    expect(getByText('Hanoi - Ho Chi Minh City')).toBeInTheDocument();
  });

  it('renders the number of adults and children', () => {
    const { getByText } = render(<Router><TourContainerCompany {...mockProps} /></Router>);
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
  });

  it('renders the tour status', () => {
    const { getByText } = render(<Router><TourContainerCompany {...mockProps} /></Router>);
    expect(getByText('Confirmed')).toBeInTheDocument();
  });
});