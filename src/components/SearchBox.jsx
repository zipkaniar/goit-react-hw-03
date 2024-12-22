import PropTypes from 'prop-types';
import styles from './component.module.css';

const SearchBox = ({ inputValue, handleChange }) => {
  return (
    <div className={styles.searchBox}>

        <p>Find contacs by name</p>
      <input className={styles.valueText} type="text" value={inputValue} onChange={handleChange} />
      
    </div>
  );
};

// Props doğrulaması
SearchBox.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBox;