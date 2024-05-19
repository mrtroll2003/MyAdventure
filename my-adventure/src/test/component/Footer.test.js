import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../../component/Footer/Footer.js';

describe('Footer', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Your Ideal Vacation Planner')).toBeInTheDocument();
  });

  it('renders the company logo', () => {
    const { getByAltText } = render(<Footer />);
    const logo = getByAltText('My Logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the useful links', () => {
    const { getByText } = render(<Footer />);
    const usefulLink = getByText('USEFUL LINK');
    const getToKnowUs = getByText('Get to know us');
    expect(usefulLink).toBeInTheDocument();
    expect(getToKnowUs).toBeInTheDocument();
  });

  it('renders the social media links', () => {
    const { getByAltText } = render(<Footer />);
    const facebookIcon = getByAltText('white facebook ic');
    const instagramIcon = getByAltText('white insta ic');
    expect(facebookIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
  });

  it('renders the contact information', () => {
    const { getByText } = render(<Footer />);
    const phoneNumber = getByText('(+89)123456789');
    const email = getByText('myadventure@gmail.com');
    expect(phoneNumber).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  // Add more tests...
});