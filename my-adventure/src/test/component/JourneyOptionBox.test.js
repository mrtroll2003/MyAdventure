import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import JourneyOptionBox from '../../component/JourneyOptionBox/JourneyOptionBox.js';

describe('JourneyOptionBox', () => {
  const mockOptions = ['Option 1', 'Option 2', 'Option 3'];

  it('renders without crashing', () => {
    const { getByRole } = render(<JourneyOptionBox options={mockOptions} />);
    expect(getByRole('combobox')).toBeInTheDocument();
  });

  it('renders the provided options', () => {
    const { getByText } = render(<JourneyOptionBox options={mockOptions} />);
    expect(getByText('Option 1')).toBeInTheDocument();
    expect(getByText('Option 2')).toBeInTheDocument();
    expect(getByText('Option 3')).toBeInTheDocument();
  });

  it('selects the first option by default', () => {
    const { getByRole } = render(<JourneyOptionBox options={mockOptions} />);
    const selectBox = getByRole('combobox');
    expect(selectBox.value).toBe('Option 1');
  });

  it('changes the selected option when a different option is selected', () => {
    const { getByRole } = render(<JourneyOptionBox options={mockOptions} />);
    const selectBox = getByRole('combobox');
    fireEvent.change(selectBox, { target: { value: 'Option 2' } });
    expect(selectBox.value).toBe('Option 2');
  });
});