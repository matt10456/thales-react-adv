import axios from 'axios';
import React, { useState, useEffect } from 'react';

function useFetch(url: string) {
  
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(url)
      .then(res => setData(res.data))
  }, [url])
  
  return data;
}

export default useFetch;