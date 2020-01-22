import React, { useState, useEffect } from 'react';

import List from '../components/List';

const LIST = [];

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(LIST);
  }, []);

  return (
    <div className="App">
      <List list={list} />
    </div>
  );
};

export default App;
