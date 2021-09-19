function generateRandomInteger(min = 1, max = 10) {
  const array = [];
  for (let i = min; i <= max; i++) array.push(i);

  return getRandomArrayItem(array);
}

function getRandomArrayItem(array = []) {
  return array[Math.floor(Math.random() * array.length)];
}

export default { generateRandomInteger };
