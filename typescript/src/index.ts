import fs from "fs";
import { Trebuchet, cubeConundrum } from "./Puzzles/index.js";

enum Data {
  Example,
  Real,
}
const dataUsed = Data.Example;
const day: number = 2;
const dataPath = "./src/data/";
let data;

switch (day) {
  case 1:
    data = fs.readFileSync(`${dataPath}/Day1/real.txt`, {
      encoding: "utf-8",
    });
    Trebuchet(data);
    break;
  case 2:
    data = fs.readFileSync(`${dataPath}/Day2/real.txt`, {
      encoding: "utf-8",
    });
    cubeConundrum(data);
}
