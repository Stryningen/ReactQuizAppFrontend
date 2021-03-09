export const fixString = (string) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = string;
  return txt.value;
};

export function simpleArrayShuffle(array, numberOfShuffles = 10) {
  let shuffledArray = [],
    randomIndex;
  const tmpArray = [...array];
  while (tmpArray.length > 0) {
    randomIndex = Math.floor(Math.random() * tmpArray.length);
    shuffledArray.push(tmpArray.splice(randomIndex, 1));
  }
  if (numberOfShuffles > 0) {
    shuffledArray = simpleArrayShuffle(shuffledArray, --numberOfShuffles);
  }
  return shuffledArray;
}

export function capitolizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
