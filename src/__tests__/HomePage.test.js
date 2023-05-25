// HomePage.test.js
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from '../components/home/HomePage';
import { fetchCurrentAirPollution } from '../components/airPollutionSlice';
import LOCATIONS from '../components/Locations';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../components/airPollutionSlice', () => ({
  fetchCurrentAirPollution: jest.fn(),
}));

const mockStore = configureStore([]);

describe('HomePage component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      airPollution: {},
    });
    store.dispatch = jest.fn();
  });
  it('renders HomePage component', () => {
    const { container, getByLabelText } = render(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>,
    );

    const filterInput = getByLabelText(/Filter by name:/i);
    const buttonContainer = container.querySelector('.container');

    expect(buttonContainer).toBeInTheDocument();
    expect(buttonContainer).toContainHTML('Ahuachapán');
    expect(buttonContainer).toContainHTML('Cabañas');

    fireEvent.change(filterInput, { target: { value: 'Air Checker' } });

    expect(buttonContainer).not.toContainHTML('Ahuachapán');
    expect(buttonContainer).not.toContainHTML('Cabañas');
  });

  it('calls dispatch on button click', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>,
    );

    const buttonElement = getByText(LOCATIONS[0].name);
    fireEvent.click(buttonElement);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(fetchCurrentAirPollution(LOCATIONS[0]));
  });

  it('filters location list', () => {
    const { getByLabelText, queryByText } = render(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>,
    );

    const inputElement = getByLabelText(/Filter by name:/i);
    fireEvent.change(inputElement, { target: { value: 'a' } });
    expect(queryByText('Ahuachapan')).toBeNull();
  });
});
