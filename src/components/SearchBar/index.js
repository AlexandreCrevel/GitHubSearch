import PropTypes from 'prop-types';
import './style.scss';

import { Input } from 'semantic-ui-react';

function SearchBar({ searchWord, setSearchWord, launchSearch }) {

  const handleChange = (event) => {
    setSearchWord(event.target.value);
  };

  return (
    <form className="form" onSubmit={launchSearch}>
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

export default SearchBar;
