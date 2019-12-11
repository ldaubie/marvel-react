import React, { useState, useEffect } from 'react';
import HeroList from './components/HeroList';
import Loader from './components/Loader';
import useApp from './useApp';

const App = () => {
  const editing = useApp();

  if (editing.loader){
    return <Loader />
  }else{
      return <HeroList characters={editing.characters} />
  }
}

export default App;
