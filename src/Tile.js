import React from "react";
import "./Tile.css"
function Tile(props){
    let value=props.dis;
    if(value==="white"){
        return <div className="tile white-tile"></div>
    }
    else if(value==="black"){
        return <div className="tile black-tile"></div>
    }
    else if(value==="blackking"){
        return <div className="tile black-tile">
        <div style={{backgroundImage:'url(https://icon-library.com/images/king-chess-piece-icon/king-chess-piece-icon-4.jpg)'}} className="King"></div>
    </div>
    }
    else if(value==="whiteking"){
        return <div className="tile white-tile">
            <div style={{backgroundImage:'url(https://icon-library.com/images/king-chess-piece-icon/king-chess-piece-icon-4.jpg)'}} className="King"></div>
        </div>
    }
    else if(value==="blackknight"){
        return <div className="tile black-tile">
        <div style={{backgroundImage:'url(https://icon-library.com/images/knight-chess-icon/knight-chess-icon-3.jpg)'}} className="Knight"></div>
    </div>
    }
    else{
        return <div className="tile white-tile">
        <div style={{backgroundImage:'url(https://icon-library.com/images/knight-chess-icon/knight-chess-icon-3.jpg)'}} className="Knight"></div>
    </div>
    }
}
export default Tile;