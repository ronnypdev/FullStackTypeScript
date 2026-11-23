const allTrucks = [2, 5, 7, 10];

const intialCapacity = 0;
const allTonnage = allTrucks.reduce((totalCapacity, currentCapacity) => {
  totalCapacity = totalCapacity + currentCapacity;

  return totalCapacity;
}, intialCapacity);

console.log(allTonnage);
