function fizzbuzz(inputs: number[]) {
  const result = inputs.reduce((acc, currVal) => {
    if (currVal < 1) throw new Error("Less that 1 is not allowed");
    if (currVal > 100) throw new Error("More that 100 is not allowed");

    return acc + currVal.toString();
  }, "");

  return "hi";
}

export default fizzbuzz;
