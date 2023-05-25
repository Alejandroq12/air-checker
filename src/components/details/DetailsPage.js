// DetailsPage.js
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentAirPollution, selectData } from '../airPollutionSlice';
import LOCATIONS from '../Locations';
import './DetailsPage.css';

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
      <div className="banner2" />
      <h1>Details Page</h1>
      <h2>{id}</h2>

      <div className="detail">
        <span>Air Quality Index:</span>
        <span>{`${item.main.aqi}`}</span>
      </div>

      <div className="detail">
        <span>Carbon Monoxide:</span>
        <span>{`${item.components.co} µg/m³`}</span>
      </div>

      <div className="detail">
        <span>Nitrogen Monoxide:</span>
        <span>{`${item.components.no} µg/m³`}</span>
      </div>

      <div className="detail">
        <span>Nitrogen Dioxide:</span>
        <span>{`${item.components.no2} µg/m³`}</span>
      </div>

      <div className="detail">
        <span>Ozone:</span>
        <span>{`${item.components.o3} µg/m³`}</span>
      </div>

      <div className="detail">
        <span>Sulfur Dioxide:</span>
        <span>{`${item.components.so2} µg/m³`}</span>
      </div>

      <div className="detail">
        <span>Particles:</span>
        <span>{`${item.components.pm2_5} µg/m³`}</span>
      </div>

      <div className="detail">
        <span>Particles:</span>
        <span>{`${item.components.pm10} µg/m³`}</span>
      </div>

      <div className="detail">
        <span>Ammonia:</span>
        <span>{`${item.components.nh3} µg/m³`}</span>
      </div>

      <h2>Explanation</h2>
      <p>
        {`These numbers indicate the concentration of different pollutants in the
        air. A high concentration could potentially harm your health, especially
        if you are exposed to it for a long period.`}
      </p>

      <h2>What can we do to improve it?</h2>
      <p>
        {`Reducing the usage of fossil fuels, managing waste properly, reducing
        deforestation, and increasing the use of renewable energy sources can
        help in improving air quality.`}
      </p>
      <h2>Health precautions</h2>
      <p>
        {`When air quality is poor, you can reduce your exposure by staying
        indoors with windows closed. Use air purifiers indoors if available.
        Avoid strenuous outdoor activities. People with respiratory conditions,
        elderly, children and pregnant women should be particularly cautious.`}
      </p>

      <Link to="/">Back</Link>
    </div>
  );
};

export default DetailsPage;
