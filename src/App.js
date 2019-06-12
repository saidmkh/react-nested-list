import React, { useState, useEffect } from 'react';
import './index.css';

import List from './List';

const LIST = [];

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(LIST);
  }, [list]);

  return (
    <div className="App">
      <List list={list} />
    </div>
  );
};

export default App;
