const cubeConundrum = (data: String) => {
  const gameLimit = {
    redCube: 12,
    greenCube: 13,
    blueCube: 14,
  };
  /*
    organized data
    [
      game set IE "Game 1, Game 2"
      [
        pull
        [
          blue, 3
          red, 4
          green, 0
        ],...
      ], ...
    ]
  */

  // 4 15 12 = 720?
  //

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

  let strut: Array<Game> = [];
  let totalPossibleGames = 0;
  let totalPowers = 0;

  const game = data.split(/\n/);

  game.forEach((entry, index) => {
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
    const gameSetRaw = entry.split(":")[1].split(";");

    gameSetRaw.forEach((set) => {
      const pull = set.split(",");

      const pullData: Pull = {
        red: 0,
        green: 0,
        blue: 0,
      };

      pull.forEach((cube) => {
        if (cube.includes(" blue")) {
          pullData.blue = +cube.split(" ")[1];
          if (pullData.blue > gameLimit.blueCube) {
            gameSet.possible = false;
          }
          if (pullData.blue > gameSet.minCube.blue) {
            gameSet.minCube.blue = pullData.blue;
          }
        }
        if (cube.includes(" red")) {
          pullData.red = +cube.split(" ")[1];

          if (pullData.red > gameLimit.redCube) {
            gameSet.possible = false;
          }

          if (pullData.red > gameSet.minCube.red) {
            gameSet.minCube.red = pullData.red;
          }
        }
        if (cube.includes(" green")) {
          pullData.green = +cube.split(" ")[1];
          if (pullData.green > gameLimit.greenCube) {
            gameSet.possible = false;
          }
          if (pullData.green > gameSet.minCube.green) {
            gameSet.minCube.green = pullData.green;
          }
        }
      });
      gameSet.power =
        gameSet.minCube.blue * gameSet.minCube.red * gameSet.minCube.green;

      gameSet.pulls.push(pullData);
    });
    console.log(gameSet);
    strut.push(gameSet);
    totalPossibleGames += gameSet.possible ? gameSet.gameId : 0;
    totalPowers += gameSet.power;
  });
  console.log(totalPossibleGames);
  console.log(totalPowers);
};

export default cubeConundrum;
