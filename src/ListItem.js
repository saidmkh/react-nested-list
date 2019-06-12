import React from 'react';

const ListItem = ({
  listItem,
  index,
  listLength,
  handleRemove,
  handleAddSubList
}) => {
  const { text, id } = listItem;

  return (
    <li className="d-flex">
      <span>{text}</span>
      {index > 0 ? <button>&uarr;</button> : null}
      {index < listLength - 1 ? <button>&darr;</button> : null}
      <button onClick={handleAddSubList()}>Add Sublist</button>
      <button onClick={handleRemove()}>Remove</button>
    </li>
  );
};

export default ListItem;
