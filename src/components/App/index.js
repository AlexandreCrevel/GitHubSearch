// == Import
import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import axios from 'axios';
import githubLogo from 'src/assets/images/logo-github.png';
import './styles.scss';
import 'semantic-ui-css/semantic.min.css';
import Message from '../Message';
import SearchBar from '../SearchBar';
import ReposResults from '../ReposResults';
import Error from '../Error';
import MenuBar from '../MenuBar';
import BottomButton from '../BottomButton';
import Faq from '../FAQ';

// == Composant
function App() {
  const [resultsData, setResultData] = useState([]);
  const [counterResults, setCounterResults] = useState(null);
  const [searchWord, setSearchWord] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  async function launchSmallSearch() {
    const thisPage = 1;
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${searchWord}&sort=stars&order=desc&page=${thisPage}&per_page=9`,
      );
      setResultData(response.data.items);
      setCounterResults(response.data.total_count);
      setCurrentPage(thisPage + 1);
    }
    catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error);
    }
  }

  async function nextPageSearch() {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${searchWord}&sort=stars&order=desc&page=${currentPage}&per_page=9`,
      );
      setResultData(resultsData.concat(response.data.items));
      setCounterResults(response.data.total_count);
      setCurrentPage(currentPage + 1);
    }
    catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error);
    }
  }

  return (
    <div className="app">
      <img src={githubLogo} alt="react logo" />
      <MenuBar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={(
              <SearchBar
                searchWord={searchWord}
                setSearchWord={setSearchWord}
                // eslint-disable-next-line react/jsx-no-bind
                launchSearch={launchSmallSearch}
              />
            )}
          />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      {counterResults !== null && <Message counterResults={counterResults} />}
      <ReposResults items={resultsData} />
      {counterResults > 9 && (
      <BottomButton
        // eslint-disable-next-line react/jsx-no-bind
        launchSmallSearch={nextPageSearch}
      />
      )}
    </div>
  );
}

// == Export
export default App;
