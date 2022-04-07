import PropTypes from 'prop-types';
import './styles.scss';

import { Input } from 'semantic-ui-react';

function SearchBar({
  searchWord, setSearchWord, launchSearch, resetSearch,
}) {
  const handleChange = (event) => {
    setSearchWord(event.target.value);
  };

  function newSearch(event) {
    event.preventDefault();
    resetSearch(event);
    launchSearch(event);
  }

  return (
    <form className="form" onSubmit={newSearch}>
      <Input
        value={searchWord}
        onChange={handleChange}
        className="searchbar"
        icon="search"
        placeholder="Search..."
      />
    </form>
  );
}

SearchBar.propTypes = {
  searchWord: PropTypes.string.isRequired,
  setSearchWord: PropTypes.func.isRequired,
  launchSearch: PropTypes.func.isRequired,
  resetSearch: PropTypes.func.isRequired,
};

export default SearchBar;
