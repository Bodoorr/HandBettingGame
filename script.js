// all game tiles
const tiles = [
  {
    type: "bamboo",
    value: 1,
    code: "B1",
    symbol: "1",
    label: "Bamboo",
    color: "green",
  },
  {
    type: "bamboo",
    value: 2,
    code: "B2",
    symbol: "2",
    label: "Bamboo",
    color: "green",
  },
  {
    type: "bamboo",
    value: 3,
    code: "B3",
    symbol: "3",
    label: "Bamboo",
    color: "green",
  },
  {
    type: "bamboo",
    value: 4,
    code: "B4",
    symbol: "4",
    label: "Bamboo",
    color: "green",
  },
  {
    type: "bamboo",
    value: 5,
    code: "B5",
    symbol: "5",
    label: "Bamboo",
    color: "green",
  },
  {
    type: "bamboo",
    value: 6,
    code: "B6",
    symbol: "6",
    label: "Bamboo",
    color: "green",
  },
  {
    type: "bamboo",
    value: 7,
    code: "B7",
    symbol: "7",
    label: "Bamboo",
    color: "green",
  },
  {
    type: "bamboo",
    value: 8,
    code: "B8",
    symbol: "8",
    label: "Bamboo",
    color: "green",
  },
  {
    type: "bamboo",
    value: 9,
    code: "B9",
    symbol: "9",
    label: "Bamboo",
    color: "green",
  },

  {
    type: "characters",
    value: 1,
    code: "C1",
    symbol: "萬",
    label: "Characters",
    color: "red",
  },
  {
    type: "characters",
    value: 2,
    code: "C2",
    symbol: "萬",
    label: "Characters",
    color: "red",
  },
  {
    type: "characters",
    value: 3,
    code: "C3",
    symbol: "萬",
    label: "Characters",
    color: "red",
  },
  {
    type: "characters",
    value: 4,
    code: "C4",
    symbol: "萬",
    label: "Characters",
    color: "red",
  },
  {
    type: "characters",
    value: 5,
    code: "C5",
    symbol: "萬",
    label: "Characters",
    color: "red",
  },
  {
    type: "characters",
    value: 6,
    code: "C6",
    symbol: "萬",
    label: "Characters",
    color: "red",
  },
  {
    type: "characters",
    value: 7,
    code: "C7",
    symbol: "萬",
    label: "Characters",
    color: "red",
  },
  {
    type: "characters",
    value: 8,
    code: "C8",
    symbol: "萬",
    label: "Characters",
    color: "red",
  },
  {
    type: "characters",
    value: 9,
    code: "C9",
    symbol: "萬",
    label: "Characters",
    color: "red",
  },

  {
    type: "dots",
    value: 1,
    code: "D1",
    symbol: "●",
    label: "Dots",
    color: "blue",
  },
  {
    type: "dots",
    value: 2,
    code: "D2",
    symbol: "●●",
    label: "Dots",
    color: "blue",
  },
  {
    type: "dots",
    value: 3,
    code: "D3",
    symbol: "●●●",
    label: "Dots",
    color: "blue",
  },
  {
    type: "dots",
    value: 4,
    code: "D4",
    symbol: "●●●●",
    label: "Dots",
    color: "blue",
  },
  {
    type: "dots",
    value: 5,
    code: "D5",
    symbol: "●●●●●",
    label: "Dots",
    color: "blue",
  },
  {
    type: "dots",
    value: 6,
    code: "D6",
    symbol: "●●●●●●",
    label: "Dots",
    color: "blue",
  },
  {
    type: "dots",
    value: 7,
    code: "D7",
    symbol: "●●●●●●●",
    label: "Dots",
    color: "blue",
  },
  {
    type: "dots",
    value: 8,
    code: "D8",
    symbol: "●●●●●●●●",
    label: "Dots",
    color: "blue",
  },
  {
    type: "dots",
    value: 9,
    code: "D9",
    symbol: "●●●●●●●●●",
    label: "Dots",
    color: "blue",
  },

  {
    type: "wind",
    name: "east",
    value: 5,
    code: "E",
    symbol: "東",
    label: "East Wind",
    color: "blue",
  },
  {
    type: "wind",
    name: "south",
    value: 5,
    code: "S",
    symbol: "南",
    label: "South Wind",
    color: "blue",
  },
  {
    type: "wind",
    name: "west",
    value: 5,
    code: "W",
    symbol: "西",
    label: "West Wind",
    color: "blue",
  },
  {
    type: "wind",
    name: "north",
    value: 5,
    code: "N",
    symbol: "北",
    label: "North Wind",
    color: "blue",
  },

  {
    type: "dragon",
    name: "red",
    value: 5,
    code: "R",
    symbol: "中",
    label: "Red Dragon",
    color: "red",
  },
  {
    type: "dragon",
    name: "green",
    value: 5,
    code: "G",
    symbol: "發",
    label: "Green Dragon",
    color: "green",
  },
  {
    type: "dragon",
    name: "white",
    value: 5,
    code: "Wh",
    symbol: "□",
    label: "White Dragon",
    color: "blue",
  },
];

// names of honor tiles.
const specialNames = [
  "east",
  "south",
  "west",
  "north",
  "red",
  "green",
  "white",
];

// default values for honor tiles
const createSpecialValues = () => ({
  east: 5,
  south: 5,
  west: 5,
  north: 5,
  red: 5,
  green: 5,
  white: 5,
});

// game state used to track score, deck, hands, betting and end game status.
const gameState = {
  score: 0,
  round: 1,
  reshuffle: 0,
  drawPile: [],
  discardPile: [],
  currentHand: [],
  prevHand: [],
  handTotal: 0,
  prevTotal: 0,
  gameOver: false,
  currentBet: null,
  betResult: "",
  prevHandValues: [],
  resultMessage: "",
  prevResult: "",
  endMessage: "",
  scoreSaved: false,
  specialValues: createSpecialValues(),
};

// DOM references for updating the UI during the game
const scoreDisplay = document.getElementById("score");
const roundDisplay = document.getElementById("round");
const reshuffleDisplay = document.getElementById("reshuffle");
const handTotalDisplay = document.getElementById("hand-total");
const currentHandTile = document.getElementById("current-tiles");
const betHigher = document.getElementById("higher");
const betLower = document.getElementById("lower");
const drawPileDisplay = document.getElementById("draw");
const discardPileDisplay = document.getElementById("discard");
const prevHandTile = document.getElementById("previous-tiles");
const specialPile = document.querySelector(".special-pile");
const resultMessageDisplay = document.getElementById("result-message");
const gameOverDisplay = document.getElementById("game-over");
const gameOverText = document.getElementById("game-over-text");
const playAgainButton = document.getElementById("play-again");

// save the score to localStorage and preview the top 5 scores
const saveScore = () => {
  let scores = localStorage.getItem("topScores");

  if (scores) {
    scores = scores.split(",").map(Number);
  } else {
    scores = [];
  }

  scores.push(gameState.score);
  scores.sort((a, b) => b - a);
  scores = scores.slice(0, 5);

  localStorage.setItem("topScores", scores.join(","));
};

// get saved scores from localStorage and show them on the home page
const showLeaderboard = () => {
  const topGames = document.getElementById("top-games");
  const empty = document.getElementById("empty");

  if (!topGames) return;

  let scores = localStorage.getItem("topScores");

  if (scores) {
    scores = scores.split(",").map(Number);
  } else {
    scores = [];
  }

  topGames.innerHTML = "";

  if (scores.length === 0) {
    if (empty) empty.style.display = "block";
    return;
  }

  if (empty) empty.style.display = "none";

  scores.forEach((scoreValue, index) => {
    const li = document.createElement("li");
    li.innerText = `#${index + 1} - ${scoreValue}`;
    topGames.appendChild(li);
  });
};

// update all game information displays
const updateDeckDisplay = () => {
  if (drawPileDisplay) drawPileDisplay.innerText = gameState.drawPile.length;
  if (discardPileDisplay)
    discardPileDisplay.innerText = gameState.discardPile.length;
  if (scoreDisplay) scoreDisplay.innerText = gameState.score;
  if (roundDisplay) roundDisplay.innerText = gameState.round;
  if (reshuffleDisplay) reshuffleDisplay.innerText = `${gameState.reshuffle}/3`;
  if (resultMessageDisplay)
    resultMessageDisplay.innerText = gameState.resultMessage;
  if (specialPile) {
    specialPile.innerHTML = "";

    specialNames.forEach((name) => {
      const tile = tiles.find(
        (item) =>
          (item.type === "wind" || item.type === "dragon") &&
          item.name === name,
      );

      if (!tile) return;

      specialPile.innerHTML += `
      <div class="tile tile-small ${tile.color}">
        <span class="tile-code">${tile.code}</span>
        <span class="tile-symbol">${tile.symbol}</span>
        <span class="tile-label">${tile.label}</span>
        <span class="tile-points">${gameState.specialValues[name]}</span>
      </div>
    `;
    });
  }
};

// show the current hand tiles and update the hand total
const updateCurrentHand = () => {
  if (!currentHandTile) return;

  currentHandTile.innerHTML = "";

  gameState.currentHand.forEach((tile) => {
    const shownValue =
      tile.type === "wind" || tile.type === "dragon"
        ? gameState.specialValues[tile.name]
        : tile.value;

    const tileDiv = document.createElement("div");
    tileDiv.classList.add("tile", tile.color);

    tileDiv.innerHTML = `
      <span class="tile-code">${tile.code}</span>
      <span class="tile-symbol">${tile.symbol}</span>
      <span class="tile-label">${tile.label}</span>
      <span class="tile-points">${shownValue}</span>
    `;

    currentHandTile.appendChild(tileDiv);
  });

  if (handTotalDisplay) {
    handTotalDisplay.innerText = gameState.handTotal;
  }
};

// add the previous hand to the history and keep the latest 5 rounds
const updateHistory = () => {
  if (!prevHandTile) return;

  const empty = document.querySelector(".empty");
  if (empty) {
    empty.style.display = "none";
  }

  const handDiv = document.createElement("div");
  handDiv.classList.add("prev-hand");

  const resultDiv = document.createElement("div");
  resultDiv.classList.add("history-result");
  resultDiv.innerText = gameState.prevResult === "win" ? "Win" : "Loss";
  handDiv.appendChild(resultDiv);

  const tilesWrap = document.createElement("div");
  tilesWrap.classList.add("history-tiles");

  gameState.prevHand.forEach((tile, index) => {
    const tileDiv = document.createElement("div");
    tileDiv.classList.add("tile", "tile-small", tile.color);

    tileDiv.innerHTML = `
      <span class="tile-code">${tile.code}</span>
      <span class="tile-symbol">${tile.symbol}</span>
      <span class="tile-label">${tile.label}</span>
      <span class="tile-points">${gameState.prevHandValues[index]}</span>
    `;

    tilesWrap.appendChild(tileDiv);
  });

  handDiv.appendChild(tilesWrap);

  const totalPrevHand = document.createElement("div");
  totalPrevHand.classList.add("prevhand-total");
  totalPrevHand.innerText = `Total: ${gameState.prevTotal}`;
  handDiv.appendChild(totalPrevHand);

  prevHandTile.prepend(handDiv);

  const oldHands = prevHandTile.querySelectorAll(".prev-hand");
  if (oldHands.length > 5) {
    oldHands[oldHands.length - 1].remove();
  }
};

// show the game over box with the final result message
const showGameOver = () => {
  if (gameOverDisplay && gameOverText) {
    gameOverText.innerText = `${gameState.endMessage} Final Score: ${gameState.score}`;
    gameOverDisplay.classList.remove("hidden");
  }
};

// reload the main game UI after state changes
const loadGame = () => {
  updateDeckDisplay();
  updateCurrentHand();
};

// randomize the order of the tiles in the draw pile
const shuffleDeck = () => {
  for (let i = gameState.drawPile.length - 1; i > 0; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    let swap = gameState.drawPile[i];
    gameState.drawPile[i] = gameState.drawPile[random];
    gameState.drawPile[random] = swap;
  }
};

// calculate the total value of the current hand, including honor tile values
const calculateHandTotal = () => {
  gameState.handTotal = 0;

  for (let i = 0; i < gameState.currentHand.length; i++) {
    if (
      gameState.currentHand[i].type === "wind" ||
      gameState.currentHand[i].type === "dragon"
    ) {
      gameState.handTotal +=
        gameState.specialValues[gameState.currentHand[i].name];
    } else {
      gameState.handTotal += gameState.currentHand[i].value;
    }
  }
};

// check if the game ended because a special tile hit 0 or 10, or the reshuffle limit was reached
const checkGameOver = () => {
  let tileEnd = false;
  let flag = false;

  specialNames.forEach((name) => {
    if (gameState.specialValues[name] === 0) {
      tileEnd = true;
      flag = false;
    }

    if (gameState.specialValues[name] === 10) {
      tileEnd = true;
      flag = true;
    }
  });

  const reshuffleLimit = gameState.reshuffle >= 3;

  if (tileEnd || reshuffleLimit) {
    gameState.gameOver = true;
    gameState.endMessage = flag || reshuffleLimit ? "You won." : "You lost.";
    if (!gameState.scoreSaved) {
      saveScore();
      gameState.scoreSaved = true;
    }

    showGameOver();
  }
};

// rebuild and shuffle the draw pile when it is empty, and increase the reshuffle count
const reshuffleDeck = () => {
  if (gameState.drawPile.length === 0 && gameState.discardPile.length > 0) {
    let freshDeck = [];

    for (let i = 0; i < 4; i++) {
      freshDeck.push(...tiles.map((tile) => ({ ...tile })));
    }

    gameState.drawPile = [...freshDeck, ...gameState.discardPile];
    gameState.discardPile = [];
    shuffleDeck();
    gameState.reshuffle++;
    updateDeckDisplay();
    checkGameOver();
  }
};

// draw a new hand of 4 tiles from the draw pile
const drawHand = () => {
  gameState.currentHand = [];

  for (let i = 0; i < 4; i++) {
    if (gameState.drawPile.length === 0) {
      reshuffleDeck();
    }

    if (gameState.gameOver || gameState.drawPile.length === 0) return;

    let tile = gameState.drawPile.pop();
    gameState.currentHand.push(tile);
  }
};

// compare the new hand with the previous hand to see if the player won or lost the bet
const compareHand = () => {
  if (gameState.prevHand.length === 0 || gameState.currentBet === null) return;

  if (gameState.currentBet === "higher") {
    gameState.betResult =
      gameState.handTotal > gameState.prevTotal ? "win" : "loss";
  } else if (gameState.currentBet === "lower") {
    gameState.betResult =
      gameState.handTotal < gameState.prevTotal ? "win" : "loss";
  }

  if (gameState.betResult === "win") {
    gameState.score++;
    gameState.resultMessage = "You won this round";
  } else {
    gameState.resultMessage = "You lost this round";
  }

  gameState.currentBet = null;
};

// update honor tile values after a round based on whether the player won or lost
const updateSpecialTileValues = () => {
  gameState.currentHand.forEach((tile) => {
    if (tile.type === "wind" || tile.type === "dragon") {
      if (gameState.betResult === "win") {
        gameState.specialValues[tile.name] += 1;
      }

      if (gameState.betResult === "loss") {
        gameState.specialValues[tile.name] -= 1;
      }

      if (gameState.specialValues[tile.name] < 0) {
        gameState.specialValues[tile.name] = 0;
      }

      if (gameState.specialValues[tile.name] > 10) {
        gameState.specialValues[tile.name] = 10;
      }
    }
  });

  calculateHandTotal();
};

// reset the full game state and start a new game
const initializeGame = () => {
  gameState.score = 0;
  gameState.round = 1;
  gameState.reshuffle = 0;
  gameState.drawPile = [];
  gameState.discardPile = [];
  gameState.currentHand = [];
  gameState.prevHand = [];
  gameState.handTotal = 0;
  gameState.prevTotal = 0;
  gameState.gameOver = false;
  gameState.currentBet = null;
  gameState.betResult = "";
  gameState.prevHandValues = [];
  gameState.resultMessage = "";
  gameState.prevResult = "";
  gameState.scoreSaved = false;
  gameState.endMessage = "";
  gameState.specialValues = createSpecialValues();

  if (prevHandTile) {
    prevHandTile.innerHTML = "";
  }

  for (let i = 0; i < 4; i++) {
    gameState.drawPile.push(...tiles.map((tile) => ({ ...tile })));
  }

  if (gameOverDisplay) {
    gameOverDisplay.classList.add("hidden");
  }

  shuffleDeck();
  drawHand();
  calculateHandTotal();
  loadGame();
};

// play one full round and update the game state and UI
const playHand = () => {
  if (gameState.gameOver || gameState.currentBet === null) return;

  gameState.prevHand = [...gameState.currentHand];
  gameState.prevHandValues = gameState.prevHand.map((tile) => {
    if (tile.type === "wind" || tile.type === "dragon") {
      return gameState.specialValues[tile.name];
    }
    return tile.value;
  });

  gameState.prevTotal = gameState.handTotal;
  gameState.discardPile.push(...gameState.prevHand);

  drawHand();

  if (gameState.gameOver) return;

  calculateHandTotal();
  compareHand();
  gameState.prevResult = gameState.betResult;
  updateSpecialTileValues();
  checkGameOver();
  updateHistory();

  if (gameState.gameOver) {
    loadGame();
    return;
  }

  gameState.round++;
  loadGame();
};

// if the Higher button is clicked, set the bet to higher and play a hand
if (betHigher) {
  betHigher.addEventListener("click", () => {
    gameState.currentBet = "higher";
    playHand();
  });
}

// if the Lower button is clicked, set the bet to lower and play a hand
if (betLower) {
  betLower.addEventListener("click", () => {
    gameState.currentBet = "lower";
    playHand();
  });
}
// if the Play Again button is clicked, start a new game
if (playAgainButton) {
  playAgainButton.addEventListener("click", () => {
    initializeGame();
  });
}

// if the current tiles element exists, start the game
if (document.getElementById("current-tiles")) {
  initializeGame();
}

// if the top games element exists, show the leaderboard
if (document.getElementById("top-games")) {
  showLeaderboard();
}
