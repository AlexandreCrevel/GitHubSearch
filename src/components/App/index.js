// == Import
import { useState, useEffect } from 'react';
import axios from 'axios';
import githubLogo from 'src/assets/images/logo-github.png';
import './styles.css';
import 'semantic-ui-css/semantic.min.css';
import Message from '../Message';
import SearchBar from '../SearchBar';
import ReposResults from '../ReposResults';

// == Composant
function App() {
  const [resultsData, setResultData] = useState([]);
  const [counterResults, setCounterResults] = useState(null);
  const [searchWord, setSearchWord] = useState('');

  async function launchSearch(event) {
    event.preventDefault();
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${searchWord}`);
      setResultData(response.data.items);
      setCounterResults(response.data.total_count);
    }
    catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error);
    }
  }
  useEffect(() => searchWord, []);
  useEffect(() => counterResults, []);

  return (
    <div className="app">
      <img src={githubLogo} alt="react logo" />
      <SearchBar
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        // eslint-disable-next-line react/jsx-no-bind
        launchSearch={launchSearch}
      />
      { counterResults !== null && <Message counterResults={counterResults} />}
      <ReposResults items={resultsData} />
    </div>
  );
}

// == Export
export default App;
