const day1 = (data: string) => {
  const linesOfText = data.split(/\n/);

  let sum = 0;

  linesOfText.forEach((line) => {
    //Maybe I can use the string it self to search through.
    const lineOfArray = line.split("");

    // THIS is the right way of thinking.
    const leftFind = lineOfArray.find((input) => validate(input));
    const rightFind = lineOfArray.reverse().find((input) => validate(input));
    const calibrationValue = leftFind + rightFind;
    sum += +calibrationValue;
  });

  console.log(sum);
};

const validate = (input: string): Boolean => /^\d+$/.test(input);

export default day1;
