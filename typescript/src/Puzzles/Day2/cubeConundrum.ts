const cubeConundrum = (data: String) => {
  // part of the puzzle requirement
  const gameLimit = {
    redCube: 12,
    greenCube: 13,
    blueCube: 14,
  };

  // This is the object we end up building.
  /*
    organized data
    [
      Game Types
      [
        Pull Types
        [
          blue, 3
          red, 4
          green, 0
        ],...
      ], ...
    ]
  */

  // types for the structure
  type Game = {
    gameId: number;
    pulls: Pull[];
    minCube: Pull;
    power: number;
    possible: boolean;
  };

  type Pull = {
    red: number;
    green: number;
    blue: number;
  };
  //

  let structure: Array<Game> = [];
  let totalPossibleGames = 0;
  let totalPowers = 0;

  const game = data.split(/\n/);

  game.forEach((entry, index) => {
    // Setting up a single game for each line from the input.
    let gameSet: Game = {
      gameId: index + 1,
      pulls: [],
      minCube: {
        red: 0,
        green: 0,
        blue: 0,
      },
      possible: true,
      power: 0,
    };

    // cutting out the "Game X" and building each set
    const gameSetRaw = entry.split(":")[1].split(";");

    gameSetRaw.forEach((set) => {
      // break down each set to it's color and number still a string.
      const pull = set.split(",");

      // object we will add to and build out.
      const pullData: Pull = {
        red: 0,
        green: 0,
        blue: 0,
      };

      /*
        This is were the meat and potatoes
      each color is sorted then it's number is set for that "pull" and check if it's the highest for that color.
      to be used as the base line for the min amount need to to cal part 2

      */
      pull.forEach((cube) => {
        // Blues go here
        if (cube.includes(" blue")) {
          pullData.blue = +cube.split(" ")[1];
          // check for possibility in part 1
          if (pullData.blue > gameLimit.blueCube) {
            gameSet.possible = false;
          }
          // check if it's the highest we've seen for this game
          if (pullData.blue > gameSet.minCube.blue) {
            gameSet.minCube.blue = pullData.blue;
          }
        }

        // Reds go here
        if (cube.includes(" red")) {
          pullData.red = +cube.split(" ")[1];
          // check for possibility in part 1
          if (pullData.red > gameLimit.redCube) {
            gameSet.possible = false;
          }
          // check if it's the highest we've seen for this game
          if (pullData.red > gameSet.minCube.red) {
            gameSet.minCube.red = pullData.red;
          }
        }

        // Green go here
        if (cube.includes(" green")) {
          pullData.green = +cube.split(" ")[1];
          // check for possibility in part 1
          if (pullData.green > gameLimit.greenCube) {
            gameSet.possible = false;
          }
          // check if it's the highest we've seen for this game
          if (pullData.green > gameSet.minCube.green) {
            gameSet.minCube.green = pullData.green;
          }
        }
      });

      // math part for part 2
      gameSet.power =
        gameSet.minCube.blue * gameSet.minCube.red * gameSet.minCube.green;

      // push the data into the game.
      gameSet.pulls.push(pullData);
    });
    // push game into the over all structure
    structure.push(gameSet);
    // building up the answers for the puzzle set.
    totalPossibleGames += gameSet.possible ? gameSet.gameId : 0;
    totalPowers += gameSet.power;
  });
  // the answers
  console.log(totalPossibleGames);
  console.log(totalPowers);
};

export default cubeConundrum;
