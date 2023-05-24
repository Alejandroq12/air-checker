// Filter.js
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label htmlFor="filter">
    Filter by name:
    <input id="filter" type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
