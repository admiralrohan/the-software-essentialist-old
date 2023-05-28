interface IResponse {
  min: number;
  max: number;
  noOfElements: number;
  avg: number;
}

export default function statsCalculator(numbers: number[]): IResponse {
  return {
    min: numbers.reduce((min, curr) => (curr < min ? curr : min), 9999),
    max: numbers.reduce((min, curr) => (curr > min ? curr : min), -9999),
    noOfElements: numbers.length,
    avg: Number(
      (numbers.reduce((sum, curr) => sum + curr, 0) / numbers.length).toFixed(
        12
      )
    ),
  };
}
