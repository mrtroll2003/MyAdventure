import React from 'react';
import { render } from '@testing-library/react';
import IntroBackground from '../../component/IntroBackground/IntroBackground.js';

describe('IntroBackground', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<IntroBackground />);
    expect(getByText('Welcome To Our')).toBeInTheDocument();
  });

  it('renders the company name', () => {
    const { getByText } = render(<IntroBackground />);
    expect(getByText('My Adventure')).toBeInTheDocument();
  });

  it('renders the intro statement', () => {
    const { getByText } = render(<IntroBackground />);
    expect(getByText('Enjoy your dream vacation, discover amazing places at exclusive details')).toBeInTheDocument();
  });
});