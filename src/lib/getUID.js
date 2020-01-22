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

export default getUID;
