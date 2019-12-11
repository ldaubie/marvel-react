import React, { useState, useEffect } from 'react';
import HeroList from './components/HeroList';
import Loader from './components/Loader';
import callApi from './callApi';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        const charactersToSet = await callApi();
        setCharacters(charactersToSet);
        setLoader(false);
    }

      fetchData();
  }, []);

  if (loader){
    return <Loader />
  }else{
      return <HeroList characters={characters} />
  }
}

export default App;
