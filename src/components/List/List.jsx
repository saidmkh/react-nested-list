import React, { useState, useEffect, useRef } from 'react';

import getUID from '../../lib/getUID';

import styles from './List.module.css';
import ListItem from '../ListItem';

const List = ({ list }) => {
  const [currentList, setCurrentList] = useState([]);
  const inputEl = useRef(null);

  useEffect(() => {
    setCurrentList(list);
  }, [list]);

  const handleAddSubList = listItemId => () => {
    const newArray = [...currentList];
    const listItemIndex = currentList.findIndex(({ id }) => id === listItemId);

    newArray[listItemIndex].subList = [];

    setCurrentList(newArray);
  };

  const handleRemoveSubList = listItemId => () => {
    const newArray = [...currentList];
    const listItemIndex = currentList.findIndex(({ id }) => id === listItemId);

    delete newArray[listItemIndex].subList;

    setCurrentList(newArray);
  };

  const handleRemove = listItemId => () => {
    const newArray = [...currentList];
    const foundedIndex = currentList.findIndex(({ id }) => id === listItemId);

    newArray.splice(foundedIndex, 1);

    setCurrentList(newArray);
  };

  const upListItem = listItemId => () => {
    const newArray = [...currentList];
    const listItemIndex = currentList.findIndex(({ id }) => id === listItemId);

    const underItem = newArray[listItemIndex - 1];
    const currentItem = newArray[listItemIndex];

    newArray[listItemIndex - 1] = currentItem;
    newArray[listItemIndex] = underItem;

    setCurrentList(newArray);
  };

  const downListItem = listItemId => () => {
    const newArray = [...currentList];
    const listItemIndex = currentList.findIndex(({ id }) => id === listItemId);

    const upperItem = newArray[listItemIndex + 1];
    const currentItem = newArray[listItemIndex];

    newArray[listItemIndex + 1] = currentItem;
    newArray[listItemIndex] = upperItem;

    setCurrentList(newArray);
  };

  const onSubmit = event => {
    event.preventDefault();

    const text = new FormData(event.currentTarget).get('text');
    const listItem = {
      id: getUID(),
      text
    };

    setCurrentList([...currentList, listItem]);
    inputEl.current.value = '';
  };

  return (
    <>
      {currentList.map((listItem, index) => {
        return (
          <ul key={listItem.id}>
            <ListItem
              listItem={listItem}
              index={index}
              listLength={currentList.length}
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
      <form onSubmit={event => onSubmit(event)} className={styles.form}>
        <input ref={inputEl} required={true} name="text" />
        <button>Add</button>
      </form>
    </>
  );
};

export default List;
