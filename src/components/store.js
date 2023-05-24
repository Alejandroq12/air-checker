// store.js
import { configureStore } from '@reduxjs/toolkit';
import airPollutionReducer from './airPollutionSlice';

export default configureStore({
  reducer: {
    airPollution: airPollutionReducer,
  },
});
