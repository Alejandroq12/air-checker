// DetailsPage.js
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentAirPollution, selectData } from './airPollutionSlice';
import LOCATIONS from './Locations';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const location = LOCATIONS.find((location) => location.name === id);
    if (location) {
      dispatch(fetchCurrentAirPollution(location));
    }
  }, [dispatch, id]);

  const data = useSelector((state) => selectData(state)[id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const item = data[0];
  