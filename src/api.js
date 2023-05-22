import axios from 'axios';

const API_BASE_URL = 'http://api.openweathermap.org/data/2.5';
const API_KEY = '024d01a80b10bb76dd871362c176949b';

const apiInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const getCurrentAirPollution = (lat, lon) => {
  return apiInstance.get(
    `/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
};

export const getForecastAirPollution = (lat, lon) => {
  return apiInstance.get(
    `/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
};

export const getHistoricalAirPollution = (lat, lon, start, end) => {
  return apiInstance.get(
    `/air_pollution/history?lat=${lat}&lon=${lon}&start=${start}&end=${end}&appid=${API_KEY}`
  );
};
