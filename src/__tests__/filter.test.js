import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Filter from '../components/filter/Filter';

describe('Filter component', () => {
  it('should render filter input correctly', () => {
    const mockOnChange = jest.fn();
    const { getByLabelText } = render(<Filter value="test" onChange={mockOnChange} />);

    const inputElement = getByLabelText(/Filter by name:/i);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('test');
  });

  it('should call onChange when input value changes', () => {
    const mockOnChange = jest.fn();
    const { getByLabelText } = render(<Filter value="test" onChange={mockOnChange} />);

    const inputElement = getByLabelText(/Filter by name:/i);
    fireEvent.change(inputElement, { target: { value: 'new test' } });
    expect(mockOnChange).toHaveBeenCalled();
  });
});
