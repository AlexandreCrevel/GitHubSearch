import PropTypes from 'prop-types';
import './styles.scss';

import { Input } from 'semantic-ui-react';

function SearchBar({
  searchWord, setSearchWord, launchSearch,
}) {
  const handleChange = (event) => {
    setSearchWord(event.target.value);
  };

  function newSearch(event) {
    event.preventDefault();
    launchSearch(event);
  }

  return (
    <form className="form" onSubmit={newSearch}>
      <Input
        fluid
        value={searchWord}
        onChange={handleChange}
        icon="search"
        iconPosition="left"
        placeholder="Search..."
      />
    </form>
  );
}

SearchBar.propTypes = {
  searchWord: PropTypes.string.isRequired,
  setSearchWord: PropTypes.func.isRequired,
  launchSearch: PropTypes.func.isRequired,
};

export default SearchBar;
