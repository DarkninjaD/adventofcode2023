import fs from "fs";
import { trebuchet, cubeConundrum, gearRations } from "./Puzzles/index.js";

enum Data {
  Example,
  Real,
}
const dataUsed = Data.Example;
const day: number = 3;
const dataPath = "./src/data/";
let data;

switch (day) {
  case 1:
    data = fs.readFileSync(`${dataPath}/Day1/real.txt`, {
      encoding: "utf-8",
    });
    trebuchet(data);
    break;
  case 2:
    data = fs.readFileSync(`${dataPath}/Day2/real.txt`, {
      encoding: "utf-8",
    });
    cubeConundrum(data);
    break;
  case 3:
    data = fs.readFileSync(`${dataPath}/Day3/real.txt`, {
      encoding: "utf-8",
    });
    console.log("grand Total: " + gearRations(data));
    break;
}
