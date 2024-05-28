export const shapeData = (data) => {
  const newData = [];
  console.log(data);
  for (let i in data) {
    newData[i] = {};
    newData[i].key = data[i].name;
    newData[i].value = data[i].quantity;
  }
  console.log(newData);
  return newData;
};
