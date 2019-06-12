import React, { useState, Fragment, useEffect } from 'react';
import './index.css';

import { getUID } from './lib';

import List from './List';

const LIST = [
  {
    id: getUID(),
    text: '01',
    subList: [
      {
        id: getUID(),
        text: '11',
        subList: [
          {
            id: getUID(),
            text: '21',
            subList: [
              {
                id: getUID(),
                text: '31'
              }
            ]
          },
          {
            id: getUID(),
            text: '22'
          },
          {
            id: getUID(),
            text: '23'
          },
          {
            id: getUID(),
            text: '24'
          }
        ]
      }
    ]
  },
  {
    id: getUID(),
    text: '02'
  }
];

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(LIST);
  }, [list]);

  return (
    <div className="App">
      <List list={list} currentList={list} setList={setList} />
    </div>
  );
};

export default App;
