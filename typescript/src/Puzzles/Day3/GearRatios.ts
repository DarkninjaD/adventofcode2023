const gearRatios = (data: string): number => {
  let total = 0;
  const rowData = data.split(/\n/);

  rowData.forEach((row, index) => {
    // anything NOT a-z + A-Z + 0-9 + .
    const onlySymbols = /[^a-zA-Z0-9.]/g;
    // const testString = "*@#/%.=$*&-+";
    // console.log(testString.match(onlySymbols));

    // returns all found symbols in the row.
    const matches = row.match(onlySymbols);

    // Loops through the matched symbols
    if (matches!) {
      matches.forEach((match) => {
        total += scan(index, row.indexOf(match), rowData);
      });
    }
  });
  return total;
};

const scan = (x: number, y: number, data: any[]): number => {
  let scanTotal = 0;

  const left = checkCell(x, y, +1, data);
  const right = checkCell(x, y, -1, data);

  const baseUp = checkCell(x - 1, y, 0, data);
  const leftUp = checkCell(x - 1, y, -1, data) + baseUp;
  const rightUp = baseUp + checkCell(x - 1, y, +1, data);

  const baseDown = checkCell(x + 1, y, 0, data);
  const leftDown = checkCell(x + 1, y, -1, data) + baseDown;
  const rightDown = baseDown + checkCell(x + 1, y, +1, data);

  if (left) scanTotal += +left;
  if (right) scanTotal += +right;
  if (leftUp !== baseUp) scanTotal += +leftUp;
  if (rightUp !== baseUp) scanTotal += +rightUp;
  if (leftDown !== baseDown) scanTotal += +leftDown;
  if (rightDown !== baseDown) scanTotal += +rightDown;

  if (left) console.log(left);
  if (right) console.log(right);
  if (leftUp !== baseUp) console.log(leftUp);
  if (rightUp !== baseUp) console.log(rightUp);
  if (leftDown !== baseDown) console.log(leftDown);
  if (rightDown !== baseDown) console.log(rightDown);

  return scanTotal;
};

const checkCell = (
  x: number,
  y: number,
  step: number,
  data: string[]
): string => {
  if (step === 0) {
    return /\d+/.test(data[x][y + step]) ? `${data[x][y + step]}` : "";
  }
  if (step === -1) {
    return /\d+/.test(data[x][y + step])
      ? `${checkCell(x, y + step, step, data)}${data[x][y + step]}`
      : "";
  }
  if (step === +1) {
    return /\d+/.test(data[x][y + step])
      ? `${data[x][y + step]}${checkCell(x, y + step, step, data)}`
      : "";
  }
};

export default gearRatios;
