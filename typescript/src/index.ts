import fs from "fs";
import { day1 } from "./Puzzles/index.js";

enum Data {
  Example,
  Real,
}
const dataUsed = Data.Example;
const day: number = 1;
const dataPath = "./src/data/";

switch (day) {
  case 1:
    const data = fs.readFileSync(`${dataPath}/Day1/real.txt`, {
      encoding: "utf-8",
    });
    day1(data);
    break;
}
