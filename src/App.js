import React, { useState, Fragment } from 'react';
import './index.css';

const getUID = () => {
  return (
    Math.random()
      .toString(36)
      .substring(2, 10) +
    new Date()
      .getTime()
      .toString(36)
      .substring(2, 10) +
    Math.random()
      .toString(36)
      .substring(2, 10)
  );
};

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

const ListItem = ({ text, index, listLength }) => {
  return (
    <li className="d-flex">
      <span>{text}</span>
      {index > 0 ? <button>&uarr;</button> : null}
      {index < listLength - 1 ? <button>&darr;</button> : null}
      <button>Add Sublist</button>
      <button>Remove</button>
    </li>
  );
};

const List = ({ list }) => {
  const [text, setText] = useState('');

  const hasSubList = list => list.subList && list.subList.length;

  return (
    <>
      {list.map((listItem, index) => {
        return (
          <li key={listItem.id}>
            <ListItem
              text={listItem.text}
              index={index}
              listLength={list.length}
            />
            {hasSubList(listItem) && <List list={listItem.subList} />}
            <input value={text} onChange={e => setText(e.target.value)} />
          </li>
        );
      })}
    </>
  );
};

const App = () => {
  const [list, setList] = useState(LIST);

  return (
    <ul className="App">
      <List list={list} />
    </ul>
  );
};

export default App;
