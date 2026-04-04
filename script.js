const tiles = [
  { type: "bamboo", value: 1 },
  { type: "bamboo", value: 2 },
  { type: "bamboo", value: 3 },
  { type: "bamboo", value: 4 },
  { type: "bamboo", value: 5 },
  { type: "bamboo", value: 6 },
  { type: "bamboo", value: 7 },
  { type: "bamboo", value: 8 },
  { type: "bamboo", value: 9 },

  { type: "characters", value: 1 },
  { type: "characters", value: 2 },
  { type: "characters", value: 3 },
  { type: "characters", value: 4 },
  { type: "characters", value: 5 },
  { type: "characters", value: 6 },
  { type: "characters", value: 7 },
  { type: "characters", value: 8 },
  { type: "characters", value: 9 },

  { type: "dots", value: 1 },
  { type: "dots", value: 2 },
  { type: "dots", value: 3 },
  { type: "dots", value: 4 },
  { type: "dots", value: 5 },
  { type: "dots", value: 6 },
  { type: "dots", value: 7 },
  { type: "dots", value: 8 },
  { type: "dots", value: 9 },

  { type: "wind", name: "east", value: 5 },
  { type: "wind", name: "south", value: 5 },
  { type: "wind", name: "west", value: 5 },
  { type: "wind", name: "north", value: 5 },

  { type: "dragon", name: "red", value: 5 },
  { type: "dragon", name: "green", value: 5 },
  { type: "dragon", name: "white", value: 5 },
];

const specialNames = [
  "east",
  "south",
  "west",
  "north",
  "red",
  "green",
  "white",
];

const createSpecialValues = () => ({
  east: 5,
  south: 5,
  west: 5,
  north: 5,
  red: 5,
  green: 5,
  white: 5,
});

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
  scoreSaved: false,
  specialValues: createSpecialValues(),
};

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
      const div = document.createElement("div");
      div.innerText = `${name}(${gameState.specialValues[name]})`;
      specialPile.appendChild(div);
    });
  }
};

const updateCurrentHand = () => {
  if (!currentHandTile) return;

  currentHandTile.innerHTML = "";

  gameState.currentHand.forEach((tile) => {
    const tileDiv = document.createElement("div");
    tileDiv.classList.add("tile");

    if (tile.name) {
      tileDiv.innerText = `${tile.name} (${gameState.specialValues[tile.name]})`;
    } else {
      tileDiv.innerText = `${tile.type} (${tile.value})`;
    }

    currentHandTile.appendChild(tileDiv);
  });

  if (handTotalDisplay) {
    handTotalDisplay.innerText = gameState.handTotal;
  }
};

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

  gameState.prevHand.forEach((tile, index) => {
    const tileDiv = document.createElement("div");
    tileDiv.classList.add("tile");

    if (tile.name) {
      tileDiv.innerText = `${tile.name} (${gameState.prevHandValues[index]})`;
    } else {
      tileDiv.innerText = `${tile.type} (${gameState.prevHandValues[index]})`;
    }

    handDiv.appendChild(tileDiv);
  });

  const totalPrevHand = document.createElement("div");
  totalPrevHand.classList.add("prevhand-total");
  totalPrevHand.innerText = `Total: ${gameState.prevTotal}`;
  handDiv.appendChild(totalPrevHand);

  prevHandTile.appendChild(handDiv);
};

const showGameOver = () => {
  if (gameOverDisplay && gameOverText) {
    gameOverText.innerText = `Final Score: ${gameState.score}`;
    gameOverDisplay.classList.remove("hidden");
  }
};

const loadGame = () => {
  updateDeckDisplay();
  updateCurrentHand();
};

const shuffleDeck = () => {
  for (let i = gameState.drawPile.length - 1; i > 0; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    let swap = gameState.drawPile[i];
    gameState.drawPile[i] = gameState.drawPile[random];
    gameState.drawPile[random] = swap;
  }
};

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

const checkGameOver = () => {
  let tileEnd = false;

  specialNames.forEach((name) => {
    if (
      gameState.specialValues[name] === 0 ||
      gameState.specialValues[name] === 10
    ) {
      tileEnd = true;
    }
  });

  const reshuffleLimit = gameState.reshuffle >= 3;

  if (tileEnd || reshuffleLimit) {
    gameState.gameOver = true;

    if (!gameState.scoreSaved) {
      saveScore();
      gameState.scoreSaved = true;
    }

    showGameOver();
  }
};

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

if (betHigher) {
  betHigher.addEventListener("click", () => {
    gameState.currentBet = "higher";
    playHand();
  });
}

if (betLower) {
  betLower.addEventListener("click", () => {
    gameState.currentBet = "lower";
    playHand();
  });
}

if (playAgainButton) {
  playAgainButton.addEventListener("click", () => {
    initializeGame();
  });
}

if (document.getElementById("current-tiles")) {
  initializeGame();
}

if (document.getElementById("top-games")) {
  showLeaderboard();
}
