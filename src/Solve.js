import React from "react";
import Tile from "./Tile.js";
function SingleTile(element){
    return (<Tile dis={element}/>)
}
function Singlerow(array){
    return (
        <div className="rows">
            {array.map(SingleTile)}
        </div>
    )
}
function Solve(props){
    var Board=props.board;
    return(
        <div className="Board">
            {Board.map(Singlerow)}
        </div>
    )
}
export default Solve;