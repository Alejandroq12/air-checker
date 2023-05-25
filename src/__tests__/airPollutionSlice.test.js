// airPollutionSlice.test.js
import { configureStore } from '@reduxjs/toolkit';
import airPollutionReducer, { fetchCurrentAirPollution, selectData } from '../components/airPollutionSlice';
import { getCurrentAirPollution } from '../api';

jest.mock('../api');

describe('air pollution slice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        airPollution: airPollutionReducer,
      },
    });
  });

  it('should handle initial state', () => {
    const state = store.getState().airPollution;
    expect(state).toEqual({});
  });

  it('should handle fetchCurrentAirPollution', async () => {
    const mockData = [{ main: { aqi: 1 }, components: { co: 1 } }];
    getCurrentAirPollution.mockResolvedValueOnce({ data: { list: mockData } });
    const location = { name: 'Ahuachapán', lat: 13.9167, lon: -89.8333 };
    await store.dispatch(fetchCurrentAirPollution(location));
    const state = store.getState().airPollution;
    expect(state).toHaveProperty(location.name, mockData);
  });

  it('should select data', () => {
    const state = { airPollution: { Ahuachapán: [{ main: { aqi: 1 }, components: { co: 1 } }] } };
    const data = selectData(state);
    expect(data).toEqual(state.airPollution);
  });
});
