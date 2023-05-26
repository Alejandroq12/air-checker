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
      <div className="banner2">
        <div className="banner-title">
          Air pollution levels by city in El Salvador.
        </div>
      </div>
      <h2 className="city">{`City: ${id}`}</h2>
      <Link className="back-link" to="/">
        Back
      </Link>

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
      <div className="info">
        <h2 className="h2">Explanation</h2>
        <p>
          {`These numbers indicate the concentration of different pollutants in the
        air. A high concentration could potentially harm your health, especially
        if you are exposed to it for a long period.`}
        </p>
      </div>

      <div className="info">
        <h2 className="h2">What can we do to improve it?</h2>
        <p>
          {`Reducing the usage of fossil fuels, managing waste properly, reducing
        deforestation, and increasing the use of renewable energy sources can
        help in improving air quality.`}
        </p>
      </div>

      <div className="info">
        <h2 className="h2">Health precautions</h2>
        <p>
          {`When air quality is poor, you can reduce your exposure by staying
        indoors with windows closed. Use air purifiers indoors if available.
        Avoid strenuous outdoor activities. People with respiratory conditions,
        elderly, children and pregnant women should be particularly cautious.`}
        </p>
      </div>
    </div>
  );
};

export default DetailsPage;
