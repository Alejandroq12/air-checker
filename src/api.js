import axios from 'axios';

export const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';
export const API_KEY = '024d01a80b10bb76dd871362c176949b';

const apiInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const getCurrentAirPollution = (lat, lon) => {
  if (typeof lat !== 'number' || typeof lon !== 'number') {
    return Promise.reject(new Error('Latitude and longitude must be numbers'));
  }

  return apiInstance.get(`/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
};

export const getForecastAirPollution = (lat, lon) => apiInstance.get(
  `/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
);

export const getHistoricalAirPollution = (lat, lon, start, end) => apiInstance.get(
  `/air_pollution/history?lat=${lat}&lon=${lon}&start=${start}&end=${end}&appid=${API_KEY}`,
);

export const fetchWeatherData = async (city) => {
  const response = await apiInstance.get(`/weather?q=${city}&appid=${API_KEY}`);
  return response.data;
};
