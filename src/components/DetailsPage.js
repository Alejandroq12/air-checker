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

  return (
    <div>
      <h1>Details Page</h1>
      <h2>{id}</h2>
      <h2>{`Air Quality Index: ${item.main.aqi}`}</h2>
      <p>{`Carbon Monoxide: ${item.components.co} µg/m³`}</p>
      <p>{`Nitrogen Monoxide: ${item.components.no} µg/m³`}</p>
      <p>{`Nitrogen Dioxide: ${item.components.no2} µg/m³`}</p>
      <p>{`Ozone: ${item.components.o3} µg/m³`}</p>
      <p>{`Sulfur Dioxide: ${item.components.so2} µg/m³`}</p>
      <p>{`Particles < 2.5µm: ${item.components.pm2_5} µg/m³`}</p>
      <p>{`Particles < 10µm: ${item.components.pm10} µg/m³`}</p>
      <p>{`Ammonia: ${item.components.nh3} µg/m³`}</p>
      <h2>Explanation</h2>
      <p>
        These numbers indicate the concentration of different pollutants in the
        air. A high concentration could potentially harm your health, especially
        if you are exposed to it for a long period.
      </p>

      <h2>What can we do to improve it?</h2>
      <p>
        Reducing the usage of fossil fuels, managing waste properly, reducing
        deforestation, and increasing the use of renewable energy sources can
        help in improving air quality.
      </p>

      <h2>Health precautions</h2>
      <p>
        When air quality is poor, you can reduce your exposure by staying
        indoors with windows closed. Use air purifiers indoors if available.
        Avoid strenuous outdoor activities. People with respiratory conditions,
        elderly, children and pregnant women should be particularly cautious.
      </p>

      <Link to="/">Back</Link>
    </div>
  );
};

export default DetailsPage;
