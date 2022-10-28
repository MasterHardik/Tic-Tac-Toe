var player = "X";

// winning logic   using 3x3 matrix

var turn = 1;
var win = -1;
var Matrix =
    [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]

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
    }
    else {
        player = "X";
        turn = 1;
    }
    
    // b = !b;
    playerUPD();
    for (var i = 0; i < 3; i++) {
        // for row check
        if (Matrix[i][0] == Matrix[i][1] && Matrix[i][1] == Matrix[i][2]) { win = Matrix[i][0]; break; }
        // for col check
        if (Matrix[0][i] == Matrix[1][i] && Matrix[1][i] == Matrix[2][i]) { win = Matrix[0][i]; break; }
    }
    //diagonal check
    if (Matrix[0][0] == Matrix[1][1] && Matrix[1][1] == Matrix[2][2]) win = Matrix[1][1];
    if (Matrix[0][2] == Matrix[1][1] && Matrix[1][1] == Matrix[2][0]) win = Matrix[0][2];
    
    if (win != -1) {
        alert("Player " + (win+1) + " wins");
    }

    if (clickCounter == 9 && win == -1) {
        confirm("Match Draw !!\n Click ok to continue.");
    }
}

var im = document.getElementById("screen-img");

var theme1 = "./TTT_IMG/TicTacToeBG_Y.jpg";
var theme2 = "./TTT_IMG/TicTacToeBG_W.jpg";

currTheme = theme1;
function chageTheme() {
    if (currTheme == theme1)
    currTheme = theme2;
    else
    currTheme = theme1;
    im.src = currTheme;
}

var gameReload = () => {
    var res = confirm("You will loose current progress !!");
    // console.log(res);
    if (res)
    document.location.reload();
}



var b = true;
function playerUPD() {
    b  = !b;
    if (b) {

        document.getElementById("turn").innerHTML = "Player 1 turn";
        // document.getElementById("turn").style.backgroundColor = "#9c88ff";
        // document.getElementById("turn").style.backgroundColor = "#00a8ff";
        document.getElementById("turn").style.backgroundColor = "#fbc531";
    }
    else {

        document.getElementById("turn").innerHTML = "Player 2 turn";
        document.getElementById("turn").style.backgroundColor = "#4cd137";
    }
}