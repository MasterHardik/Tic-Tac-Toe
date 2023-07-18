var player = "X";

//*** winning logic   using 3x3 matrix ***
var turn = 1;
var win = -1;
var Matrix = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1],
];

var chance = document.getElementById("turn");

var clickCounter = 0;
function step(cell, row, col) {
  clickCounter++;
  if (cell.innerHTML != "") {
    return;
  }
  if (win != -1) return;
  Matrix[row][col] = turn;
  cell.innerHTML = player;

  if (player == "X") {
    player = "O";
    turn = 0;
  } else {
    player = "X";
    turn = 1;
  }
  playerUPD();
  for (var i = 0; i < 3; i++) {
    // for row check
    if (Matrix[i][0] == Matrix[i][1] && Matrix[i][1] == Matrix[i][2]) {
      win = Matrix[i][0];
      break;
    }
    // for col check
    if (Matrix[0][i] == Matrix[1][i] && Matrix[1][i] == Matrix[2][i]) {
      win = Matrix[0][i];
      break;
    }
  }
  //diagonal check
  if (Matrix[0][0] == Matrix[1][1] && Matrix[1][1] == Matrix[2][2])
    win = Matrix[1][1];
  if (Matrix[0][2] == Matrix[1][1] && Matrix[1][1] == Matrix[2][0])
    win = Matrix[0][2];

  if (win != -1) {
    win_sound.play();
    alert("Player " + (win + 1) + " wins");
  }

  if (clickCounter == 9 && win == -1) {
    confirm("Match Draw !!\n Click ok to continue.");
    error_sound.play();
  }
}

var gameReload = () => {
  error_sound.play();
  var res = confirm("You will loose current progress !!");
  if (res) document.location.reload();
};

var b = true;
function playerUPD() {
  click_sound.play();
  let t = document.getElementById("turn");
  t.style.color = "white";
  t.style.textShadow = "black 1px 1px -2px";
  b = !b;
  if (b) {
    document.getElementById("turn").innerHTML = "Player 1 turn";
    document.getElementById("turn").style.backgroundColor = "#fbc531";
  } else {
    document.getElementById("turn").innerHTML = "Player 2 turn";
    document.getElementById("turn").style.backgroundColor = "#4cd137";
  }
}

// Some sounds magic
var click_sound = new Audio(
  "../click_sounds/mixkit-arcade-game-jump-coin-216.wav"
);

var error_sound = new Audio("../click_sounds/mixkit-click-error-1110.wav");

var win_sound = new Audio(
  "../click_sounds/mixkit-fantasy-game-success-notification-270.wav"
);
