import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentAirPollution } from '../api';

export const fetchCurrentAirPollution = createAsyncThunk(
  'airPollution/fetchCurrentAirPollution',
  async ({ lat, lon }) => {
    const response = await getCurrentAirPollution(lat, lon);
    const dataList = response.data.list || [];
    return dataList.map((item) => item);
  },
);

const airPollutionSlice = createSlice({
  name: 'airPollution',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentAirPollution.fulfilled, (state, action) => {
      state[action.meta.arg.name] = action.payload;
    });
  },
});

export const selectData = (state) => state.airPollution;
export default airPollutionSlice.reducer;
