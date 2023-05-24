// HomePage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCurrentAirPollution } from './airPollutionSlice';
import LOCATIONS from './Locations';
import Filter from './Filter';

const HomePage = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredLocations = LOCATIONS.filter(
    (location) => location.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      <h1>HomePage</h1>
      <Filter value={filter} onChange={handleFilterChange} />
      <div>
        {filteredLocations.map((location) => (
          <Link key={location.name} to={`/details/${location.name}`}>
            <button
              type="button"
              onClick={() => dispatch(fetchCurrentAirPollution(location))}
            >
              {location.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
