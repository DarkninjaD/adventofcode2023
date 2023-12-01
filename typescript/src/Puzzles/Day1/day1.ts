const day1 = (data: string) => {
  const linesOfText = data.split(/\n/);

  let sum = 0;

  linesOfText.forEach((line, index) => {
    //Maybe I can use the string it self to search through.
    const lineOfArray = line.split("");

    // THIS is the right way of thinking.
    const leftFind = findFirst(lineOfArray);
    // how i made this functions with a flag feels wrong.
    const rightFind = findFirst(lineOfArray.reverse(), "do");
    // Logs
    console.log("");
    console.log("entry : " + index);
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

/*
 this function will find the first 1-9 number or word and it as 1-9 number string.

 Again don't like this strategy Might just make a wrapper function instead of using a flag in the function to know if it needs to worry about reverse search or straight
*/
const findFirst = (line: string[], strategy = "straight"): string => {
  let accumulate = "";

  for (let current = 0; current < line.length; current++) {
    // straight search or reverse
    if (strategy === "straight") {
      accumulate += line[current];
    } else {
      accumulate = line[current].concat(accumulate);
    }

    // check if we have a valid single digit
    if (validate(line[current])) {
      accumulate = line[current];
      break;
    }

    // check if we have a valid word
    if (validate(accumulate)) {
      // return word as digit string.
      accumulate = wordsToNum(accumulate);
      break;
    }
  }

  return accumulate;
};

// validates if given string is a digit 1-9 or string version of it.
const validate = (input: string): Boolean => {
  let flag = false;

  flag = /^\d+$/.test(input);
  if (flag) return flag;
  flag = Object.keys(wordsOfNum).some((key) => input.includes(key));

  return flag;
};

// take input and finds if it contains the valid string
const wordsToNum = (input): string => {
  const index = Object.keys(wordsOfNum).find((key) => input.includes(key));
  return `${wordsOfNum[index]}`;
};

// key value pair object of words of digit.
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
