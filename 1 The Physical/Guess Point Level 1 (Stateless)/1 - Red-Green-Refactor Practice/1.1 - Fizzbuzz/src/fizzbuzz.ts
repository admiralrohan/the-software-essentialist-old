function fizzbuzz(inputs: number[]) {
  const result = inputs.reduce((acc, currVal) => {
    if (currVal < 1) throw new Error("Less that 1 is not allowed");
    if (currVal > 100) throw new Error("More that 100 is not allowed");

    let valueToAdd = currVal.toString();

    const isMultipleOfThree = currVal % 3 === 0;
    if (isMultipleOfThree) valueToAdd = "Fizz";

    const isMultipleOfFive = currVal % 5 === 0;
    if (isMultipleOfFive) valueToAdd = "Buzz";

    const isMultipleOfThreeAndFive = currVal % 3 === 0 && currVal % 5 === 0;
    if (isMultipleOfThreeAndFive) valueToAdd = "FizzBuzz";

    return acc + valueToAdd;
  }, "");

  return result;
}

export default fizzbuzz;
