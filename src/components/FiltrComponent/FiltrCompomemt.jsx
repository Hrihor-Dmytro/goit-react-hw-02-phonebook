import { PropTypes } from 'prop-types';

export const Filter = ({ value, onFilterChange }) => {
  return (
    <div>
      <label htmlFor="text">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
