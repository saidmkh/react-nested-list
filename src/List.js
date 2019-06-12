import React, { useState, useEffect, useRef } from 'react';

import { getUID } from './lib';

import ListItem from './ListItem';

const List = ({ list }) => {
  const [curList, setCurList] = useState([]);
  const inputEl = useRef(null);

  useEffect(() => {
    setCurList(list);
  }, [list]);

  const handleAddSubList = listItemId => () => {
    const newArray = [...curList];
    const foundedListItem = curList.find(item => item.id === listItemId);
    const listItemIndex = curList.findIndex(item => item.id === listItemId);

    foundedListItem.subList = [];
    newArray[listItemIndex] = foundedListItem;

    setCurList(newArray);
  };

  const handleRemoveSubList = listItemId => () => {
    const newArray = [...curList];
    const foundedListItem = curList.find(item => item.id === listItemId);
    const listItemIndex = curList.findIndex(item => item.id === listItemId);

    delete foundedListItem.subList;
    newArray[listItemIndex] = foundedListItem;

    setCurList(newArray);
  };

  const handleRemove = listItemId => () => {
    const filteredList = curList.filter(item => item.id !== listItemId);

    setCurList(filteredList);
  };

  const upListItem = listItemId => () => {
    const newArray = [...curList];
    const listItemIndex = curList.findIndex(item => item.id === listItemId);

    const underItem = newArray[listItemIndex - 1];
    const item = newArray[listItemIndex];

    newArray[listItemIndex - 1] = item;
    newArray[listItemIndex] = underItem;

    setCurList(newArray);
  };

  const downListItem = listItemId => () => {
    const newArray = [...curList];
    const listItemIndex = curList.findIndex(item => item.id === listItemId);

    const underItem = newArray[listItemIndex + 1];
    const item = newArray[listItemIndex];

    newArray[listItemIndex + 1] = item;
    newArray[listItemIndex] = underItem;

    setCurList(newArray);
  };

  const onSubmit = event => {
    event.preventDefault();

    const text = new FormData(event.currentTarget).get('text');

    const listItem = {
      id: getUID(),
      text
    };

    setCurList([...curList, listItem]);
    inputEl.current.value = '';
  };

  return (
    <>
      {curList.map((listItem, index) => {
        return (
          <ul key={listItem.id}>
            <ListItem
              listItem={listItem}
              index={index}
              listLength={curList.length}
              handleRemove={handleRemove}
              handleAddSubList={handleAddSubList}
              handleRemoveSubList={handleRemoveSubList}
              upListItem={upListItem}
              downListItem={downListItem}
            />
            {listItem.subList && <List list={listItem.subList} />}
          </ul>
        );
      })}
      <form onSubmit={event => onSubmit(event)} className="input-block">
        <input ref={inputEl} required={true} name="text" />
        <button>Add</button>
      </form>
    </>
  );
};

export default List;
