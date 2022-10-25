var player = "X";

function step(cell)
{
    if (cell.innerHTML != "") {   
        return;
    }
    cell.innerHTML = player;   
        if (player == "X")
            player = "O";
        else
            player = "X";
}

var im = document.getElementById("screen-img");
    
var theme1 = "./TTT_IMG/TicTacToeBG_Y.jpg";
var theme2 = "./TTT_IMG/TicTacToeBG_W.jpg";

currTheme = theme1;
function chageTheme()
{
    if (currTheme == theme1)
        currTheme = theme2;
    else
        currTheme = theme1; 
    im.src = currTheme;
}

var gameReload = () =>
{
    var res = confirm("You will loose current progress !!");
    // console.log(res);
    if (res)
        document.location.reload();
}