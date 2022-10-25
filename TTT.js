var player = "X";

function step(cell)
{
    // console.log(this);
    // alert("executed");
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
// var changeColor = ()=>
// {
//     // console.log("-->")
//     let temp = document.getElementById("screen-img");
//     let first = "TicTacToeBG_W.jpg";
//     let second ="TicTacToeBG_G.jpg";
//     // let first = document.getElementById("screen-img").src ="./TTT_IMG/TicTacToeBG_B.jpg";
//     // temp.src = "./TTT_IMG/TicTacToeBG_G.jpg";
//         console.log(temp.src);
//         // temp.style.backgroundImage = "./TTT_IMG/TicTacToe_G.jpg"
//     if (temp.src == first)
//         temp.src = second
//     else temp.src = first
//     console.log(temp);
//     // temp.style.backgroundImage = "./TTT_IMG/TicTacToe_G.jpg"
//     // temp.style.border =" 2px solid green";
    
// }