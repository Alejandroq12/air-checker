import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from '../components/navbar/NavBar';

describe('NavBar component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<NavBar />);
    expect(getByText(/Air Checker/i)).toBeInTheDocument();
  });
});
