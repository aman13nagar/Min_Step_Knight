//import queue from "./Queue";
import getSize from "./getSize";
class Position {
    constructor(x, y, dist) {
        this.x = x;
        this.y = y;
        this.dist = dist;
    }

    equals(that) {
        if(this.x === that.x && this.y === that.y){
            return true;
        }
        else{
            return false;
        }
    }
}
let n=getSize();
let chessboard = new Array(n).fill(null).map(() => new Array(n).fill(null));
let q=[];
function inRange(x,y){
    if(x>=0&&x<n&&y>=0&&y<n){
        return true;
    }
    else{
        return false;
    }
}
function isValid(current, next) {
    let X = next.x - current.x;
    let Y = next.y - current.y;
    if(5 === X * X + Y * Y){
        return true;
    }
    else{
        return false;
    }
}

function ChessBoard() {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            chessboard[i][j] = new Position(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        }
    }
}

function bfs(current, dist) {
    for (let i = -2; i <= 2; i++) {
        for (let j = -2; j <= 2; j++) {
            let next = new Position(current.x + i, current.y + j, dist);
            if (inRange(next.x,next.y)) {
                if (current.equals(next)) continue;
                if (isValid(current, next)) {
                    let position = chessboard[next.x][next.y];
                    if (position.dist > dist) {
                        chessboard[current.x + i][current.y + j] = new Position(current.x, current.y, dist);
                        q.push(next);
                    }
                }
            }
        }
    }
}

function getShortestPath(start,end) {
    let path = [];
    let current = chessboard[end.x][end.y];
    while ((current.x!==start.x)&&(current.y!==start.y)) {
        path.push(current);
        current = chessboard[current.x][current.y];
    }
    path.push(new Position(start.x,start.y,0));
    return path;
}
function Main(Knightpos,Targetpos) {
    ChessBoard();
    let start = new Position(Knightpos[0], Knightpos[1], 0);
    let end = new Position(Targetpos[0], Targetpos[1],Number.MAX_VALUE);
    chessboard[Knightpos[0]][Knightpos[1]] = new Position(start.x, start.y, 0);
    q.push(start);

    while (q.length!== 0) {
        let pos = q.shift();
        if (end.equals(pos)) {
            let path=getShortestPath(start,end);
            console.log(path);
            console.log(pos.x, pos.y);
            return path;

        } else {
            bfs(pos, pos.dist+1);
        }
    }
    console.log("End position is not reachable for the knight");
    return;
}
export default Main;
   /* function ClaculatePath(Knightpos,Targetpos,n){
           let paths=[]
        //   let pathcount=0;
           let x1=Knightpos[0];
           let y1=Knightpos[1];
           let x2=Targetpos[0];
           let y2=Targetpos[1];
           console.log(x1);
           if(x1===x2&&y1===y2){
              paths.push([0,0]);
              return paths;
           }
           const q=new queue();
           q.enqueue([x1,y1]);
           let Des=[];
           let visited=Array(n).fill().map(()=>Array(n).fill(0));
           while(!q.isEmpty()){
              let temp=q.peek();
              let i=temp[0];
              let j=temp[1];
              if(i===Targetpos[0]&&j===Targetpos[1]){
                Des[0]=i;
                Des[1]=j;
              }
              else{
                paths.push([i,j]);
              }
              q.dequeue();
                  if((i-1)>=0&&(i-1)<n&&(j+2)>=0&&(j+2)<n&&visited[i-1][j+2]===0){
                      visited[i-1][j+2]=visited[i][j]+1;
                      q.enqueue([i-1,j+2]);
                  }
                  if((i+1)>=0&&(i+1)<n&&(j+2)>=0&&(j+2)<n&&visited[i+1][j+2]===0){
                      visited[i+1][j+2]=visited[i][j]+1;
                      q.enqueue([i+1,j+2]);
                  }
                  if((i-2)>=0&&(i-2)<n&&(j+1)>=0&&(j+1)<n&&visited[i-2][j+1]===0){
                      visited[i-2][j+1]=visited[i][j]+1;
                      q.enqueue([i-2,j+1]);
                  }
                  if((i+2)>=0&&(i+2)<n&&(j+1)>=0&&(j+1)<n&&visited[i+2][j+1]===0){
                      visited[i+2][j+1]=visited[i][j]+1;
                      q.enqueue([i+2,j+1]);
                  }
                  if((i+2)>=0&&(i+2)<n&&(j-1)>=0&&(j-1)<n&&visited[i+2][j-1]===0){
                      visited[i+2][j-1]=visited[i][j]+1;
                      q.enqueue([i+2,j-1]);
                  }
                  if((i-1)>=0&&(i-1)<n&&(j-2)>=0&&(j-2)<n&&visited[i-1][j-2]===0){
                      visited[i-1][j-2]=visited[i][j]+1;
                      q.enqueue([i-1,j-2]);
                  }
                  if((i-2)>=0&&(i-2)<n&&(j-1)>=0&&(j-1)<n&&visited[i-2][j-1]===0){
                      visited[i-2][j-1]=visited[i][j]+1;
                      q.enqueue([i-2,j-1]);
                  }
                  if((i+1)>=0&&(i+1)<n&&(j-2)>=0&&(j-2)<n&&visited[i+1][j-2]===0){
                      visited[i+1][j-2]=visited[i][j]+1;
                      q.dequeue([i+1,j-2]);
                  }
              }
              //return visited[x2][y2];
              //return visited;
              paths.push(Des);
              return paths;
           }
 export default ClaculatePath;*/
