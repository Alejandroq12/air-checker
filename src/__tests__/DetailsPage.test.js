// DetailsPage.test.js
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';

import DetailsPage from '../components/details/DetailsPage';

// Configure the mock store
const mockStore = configureStore([]);

describe('DetailsPage component', () => {
  test('renders DetailsPage component', () => {
    // Mock the Redux state
    const store = mockStore({
      airPollution: {
        Ahuachapán: {},
      },
    });

    render(
      <Provider store={store}>
        <Router>
          <DetailsPage />
        </Router>
      </Provider>,
    );
  });
});
