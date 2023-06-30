import React from "react";
import Source from "./Source";
import Target from "./Destination";
import Solve from "./Solve";
import getSize from "./getSize";
let Knightpos=Source();
let Targetpos=Target();
function Chessboard(){
    let n=getSize();
    let board=Array(n).fill().map(()=>Array(n).fill("black"));
    let X=Knightpos[0];
    let Y=Knightpos[1];
    for(let j=n-1;j>=0;j--){
        for(let i=0;i<n;i++){
            const number=i+j+2;
            if(i===Targetpos[0]&&j===Targetpos[1]&&number%2!==0){
                board[i][j]="blackking";
            }
            else if(i===Targetpos[0]&&j===Targetpos[1]&&number%2===0){
                board[i][j]="whiteking";
            }
            else if(i===X&&j===Y&&number%2===0){
                board[i][j]="whiteknight";
            }
            else if(i===X&&j===Y&&number%2!==0){
                board[i][j]="blackknight";
            }
            else if(number%2===0){
                board[i][j]="white";
            }
            else{
                board[i][j]="black";
            }
        }
    }
   // console.log(board);
    return (<Solve
        board={board}
        />)
}
export default Chessboard;
