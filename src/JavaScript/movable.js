class Movable{
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
    }
    // grid: [x, y]
    //  -1: invalid
    //   0: empty
    //   1: grass
    move(xMove, yMove, grid){
        let [currX, currY] = this.getGridPos();

        if(xMove || yMove){
            console.log(`move(${xMove}, ${yMove}):  pos=[${this.x}, ${this.y}], curr=[${currX}, ${currY}]`);
        }

        // horizontal
        let tXMove = 0;
        if(xMove >= 0){
            for (let i = currX+1; i <= currX+xMove; i++) {
                if(i >= grid.length || grid[i][currY] === -1){
                    tXMove--;
                    break;
                }
                else if(grid[i][currY] === 0){
                    tXMove++;
                }
                else if(grid[i][currY] === 1){
                    tXMove += 0.5;
                }
            }
        }
        else{
            console.log("yay 1");
            console.log(`loop from ${currX-1} to ${currX+xMove}`);
            for (let i = currX-1; i >= currX+xMove; i--) {
                // // TODO delete test
                // let near = "Near:\n";
                // for (let r = -3; r < 4; r++) {
                //     for (let c = -3; c < 4; c++) {
                //         near += grid[r+currX][c+currY] + ", "
                //     }
                //     near += "\n"
                // }
                // console.log(near);

                if(i < 0 || grid[i][currY] === -1){
                    break;
                }
                else if(grid[i][currY] === 0){
                    tXMove--;
                    console.log("yay 2");
                }
                else if(grid[i][currY] === 1){
                    tXMove -= 0.5;
                }
            }
        }
        this.x += tXMove;
        currX = Math.round(this.x);

        // vertical
        let tYMove = 0;
        if(yMove >= 0){
            for (let i = currY+1; i <= currY+yMove; i++) {
                if(i >= grid[0].length || grid[currX][i] === -1){
                    console.log("wall");
                    break;
                }
                else if(grid[currX][i] === 0){
                    tYMove--;
                }
                else if(grid[currX][i] === 1){
                    tYMove -= 0.5;
                }
            }
        }
        else{
            for (let i = currY-1; i >= currY+yMove; i--) {
                if(i < 0 || grid[currX][i] === -1){
                    console.log("wall");
                    break;
                }
                else if(grid[currX][i] === 0){
                    tYMove++;
                }
                else if(grid[currX][i] === 1){
                    tYMove += 0.5;
                }
            }
        }
        this.y += tYMove;

        if(xMove || yMove){
            console.log(`tot(${tXMove}, ${tYMove}):  pos=[${this.x}, ${this.y}]`);
        }
    }
    getGridPos(){
        return [Math.round(this.x), Math.round(this.y)];
    }
}

export default Movable;