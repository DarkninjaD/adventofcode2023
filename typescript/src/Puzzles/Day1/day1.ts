const day1 = (data: string) => {
  const linesOfText = data.split(/\n/);

  let sum = 0;

  linesOfText.forEach((line) => {
    //Maybe I can use the string it self to search through.
    const lineOfArray = line.split("");

    // THIS is the right way of thinking.
    const leftFind = findFirst(lineOfArray);
    const rightFind = findFirst(lineOfArray.reverse(), "do");
    console.log("");
    console.log("Looking at " + line);
    console.log("found searching left " + leftFind);
    console.log("found searching right " + rightFind);
    const calibrationValue = leftFind + rightFind;
    console.log("calibration Value " + calibrationValue);
    //
    sum += +calibrationValue;
  });

  console.log(sum);
};

const findFirst = (line: string[], strategy = "straight"): string => {
  let accumulate = "";

  for (let current = 0; current < line.length; current++) {
    if (strategy === "straight") {
      accumulate += line[current];
    } else {
      accumulate = line[current].concat(accumulate);
    }

    if (validate(line[current])) {
      accumulate = line[current];
      break;
    }

    if (validate(accumulate)) {
      accumulate = wordsToNum(accumulate);
      break;
    }
  }

  return accumulate;
};

const validate = (input: string): Boolean => {
  let flag = false;

  flag = /^\d+$/.test(input);
  if (flag) return flag;
  flag = Object.keys(wordsOfNum).some((key) => input.includes(key));

  return flag;
};

const wordsToNum = (input): string => {
  const index = Object.keys(wordsOfNum).find((key) => input.includes(key));
  return `${wordsOfNum[index]}`;
};

const wordsOfNum = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

export default day1;
