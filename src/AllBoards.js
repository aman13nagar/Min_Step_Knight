
import React from "react"
import Main from "./TotalPaths";
import Source from "./Source";
import Target from "./Destination";
import "./allchessboards.css"
import getSize from "./getSize";
import "./Tile.css";
import Solve from "./Solve";
const Targetpos=Target();
class first {
    constructor(x, y, depth) {
        this.x = x;
        this.y = y;
        this.depth = depth;
    }

    equals(that) {
        return this.x === that.x && this.y === that.y;
    }
}
function Board(arr){
    let n=getSize();
    let board=Array(n).fill().map(()=>Array(n).fill("black"));
    let X=arr[0];
    let Y=arr[1];
    for(let j=n-1;j>=0;j--){
        for(let i=0;i<n;i++){
            const number=i+j+2;
            if(X===Targetpos[0]&&Y===Targetpos[1]){
                if(i===X&&j===Y&&number%2===0){
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
            else{
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
    }
    return (<Solve
        board={board}
        />)
}
function Allboards(){
    let knightpos=Source();
    let Targetpos=Target();
    let path=Main(knightpos,Targetpos);
    console.log(path);
    let paths=[];
    for(let i=path.length-2;i>=0;i--){
        first=path[i];
        paths.push([first.x,first.y]);
    }
    console.log(paths)
    paths.push([Targetpos[0],Targetpos[1]]);
    //const n=getSize();
    //let paths=[[2,1],[1,3],[4,3]];
    return (<div className="allchessboard">
        {paths.map(Board)}
    </div>)
}
export default Allboards;
