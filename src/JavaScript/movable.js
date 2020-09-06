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
        let [currX, currY] = [Math.round(this.x), Math.round(this.y)];

        // horizontal
        let tXMove = 0;
        if(xMove > 0){
            for (let i = currX+1; i <= currX+xMove; i++) {
                if(grid[i][currY] === -1){
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
            for (let i = currX-1; i >= currX+xMove; i--) {
                if(grid[i][currY] === -1){
                    break;
                }
                else if(grid[i][currY] === 0){
                    tXMove--;
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
        if(yMove > 0){
            for (let i = currY+1; i <= currY+yMove; i++) {
                if(grid[currX][i] === -1){
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
        else{
            for (let i = currY-1; i >= currY+yMove; i--) {
                if(grid[currX][i] === -1){
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
        this.y += tYMove;
    }
}

export default Movable;