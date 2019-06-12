import React from 'react';

const ListItem = ({
  listItem,
  index,
  listLength,
  handleRemove,
  handleAddSubList,
  upListItem,
  downListItem
}) => {
  const { text, id, subList } = listItem;

  return (
    <li className="d-flex">
      <span>{text}</span>
      {index > 0 ? <button onClick={upListItem(id)}>&uarr;</button> : null}
      {index < listLength - 1 ? (
        <button onClick={downListItem(id)}>&darr;</button>
      ) : null}
      {!listItem.subList && (
        <button onClick={handleAddSubList(id)}>Add Sublist</button>
      )}
      <button onClick={handleRemove(id)}>Remove</button>
    </li>
  );
};

export default ListItem;
