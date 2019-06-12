import React, { useState } from 'react';

import { getUID, nestedSearcher } from './lib';

import ListItem from './ListItem';

const List = ({ list, currentList, listId, setList }) => {
  const [text, setText] = useState('');

  const hasSubList = list => list.subList && list.subList.length;

  const handleRemove = () => listItemId => {
    console.log('object');
  };

  const handleAddSubList = () => () => console.log('object');

  const onSubmit = event => {
    event.preventDefault();

    const ListItem = {
      id: getUID(),
      text
    };

    const newList = nestedSearcher(list, listId, ListItem);

    setList([...newList]);

    setText('');
  };

  return (
    <>
      {currentList.map((listItem, index) => {
        console.log(listItem);
        return (
          <ul key={listItem.id}>
            <ListItem
              listItem={listItem}
              index={index}
              listLength={currentList.length}
              handleRemove={handleRemove}
              handleAddSubList={handleAddSubList}
            />
            {hasSubList(listItem) && (
              <List
                currentList={listItem.subList}
                list={list}
                listId={listItem.id}
                setList={setList}
              />
            )}
          </ul>
        );
      })}
      <form onSubmit={event => onSubmit(event)} className="input-block">
        <input
          required={true}
          value={text}
          onChange={event => setText(event.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default List;
