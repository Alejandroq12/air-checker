import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ value, onChange }) => (
  <div className="filter-container">
    <label htmlFor="filter" className="filter-label">
      Filter by name:
      <span> </span>
      <input className="filter-input" id="filter" type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
