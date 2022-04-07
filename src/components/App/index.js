// == Import
import { useState, useEffect } from 'react';
import githubLogo from 'src/assets/images/logo-github.png';
import './styles.css';
import 'semantic-ui-css/semantic.min.css';
import Message from '../Message';
import SearchBar from '../SearchBar';
import ReposResults from '../ReposResults';
import data from '../../data/repos';

// == Composant
function App() {
  const [resultsData, setResultData] = useState(data.items);
  const [counterResults, setCounterResults] = useState(0);
  const [searchWord, setSearchWord] = useState('');

  function launchSearch(event) {
    event.preventDefault();
    console.log("submit");
    const newResults = [];
    resultsData.forEach((item) => {
      const itemLowerCase = item.full_name.toLowerCase();
      itemLowerCase.includes(searchWord.toLowerCase()) ? newResults.push(item) : '';
    });
    setResultData(newResults);
  }
  useEffect(()=> searchWord, []);


  return (
    <div className="app">
      <img src={githubLogo} alt="react logo" />
      <SearchBar
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        launchSearch={launchSearch}
      />
      <Message counterResults={counterResults} />
      <ReposResults items={resultsData} />
    </div>
  );
}

// == Export
export default App;
