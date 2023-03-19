function getMinNumber(numbers: number[]) {
  return numbers.reduce((acc, curr) => {
    return acc < curr ? acc : curr;
  }, 99999);
}

function getMaxNumber(numbers: number[]) {
  return numbers.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
  }, -99999);
}

function getAvgNumber(numbers: number[]) {
  const avg =
    numbers.reduce((acc, curr) => {
      return acc + curr;
    }, 0) / numbers.length;

  return parseFloat(avg.toFixed(12));
}

function statsCalculator(numbers: number[]): {
  min: number;
  max: number;
  noOfElements: number;
  avg: number;
} {
  return {
    min: getMinNumber(numbers),
    max: getMaxNumber(numbers),
    noOfElements: numbers.length,
    avg: getAvgNumber(numbers),
  };
}

export default statsCalculator;
