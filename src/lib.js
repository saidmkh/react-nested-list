export const getUID = () => {
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

export const nestedSearcher = (item, id, added) => {
  for (let i = 0; i < item.length; i++) {
    if (!item[i].subList) {
      continue;
    }

    if (item[i].id === id) {
      item[i].subList.push(added);
      return item;
    }

    if (nestedSearcher(item[i].subList, id)) {
      return nestedSearcher(item[i].subList, id);
    }
  }
};
