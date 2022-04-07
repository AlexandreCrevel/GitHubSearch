import { useEffect, useState } from 'react';
import axios from 'axios';

function newSearch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      console.log(data);
    }
    catch (error) {
      console.log('error', error);
    }
    finally {
      setLoading(false);
    }
  };
  useEffect(fetchData, []);

  return [loading, data];
}

export default newSearch;
