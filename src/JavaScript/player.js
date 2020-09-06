import Movable from "./movable";
import * as Constants from "./constants";

class Player extends Movable{
    constructor(startX, startY, inventory){
        super(startX, startY);

        this.baseSpeed = Constants.baseSpeed;

        this.covidBar = 0; // out of 100

        this.inventory = inventory;
    }
    // // TODO: everything below here
    // // grid: [x, y]
    // //  -1: invalid
    // //   0: empty
    // //   1: grass
    // move(xM, yM, grid){
    //     const [x, y] = [Math.round(this.x), Math.round(this.y)];
    //
    //     let tX = 0;
    //     for (let i = 0; i < this.baseSpeed; i++) {
    //         if(x+i >= grid.length){
    //             break;
    //         }
    //         if(grid[x+i][y] === -1){
    //             break;
    //         }
    //         else if(grid[x+i][y] === 0){
    //             tX += 1;
    //         }
    //         else if(grid[x+i][y] === 1){
    //             tX += 0.5;
    //         }
    //         else if(grid[x+i][y] === 2){
    //             this.covidBar++;
    //             tX += 1;
    //         }
    //     }
    // }
    // // covidGrid: [x, y]
    // //   true/false
    // tick(enemies){
    //     const [currX, currY] = [Math.round(this.x), Math.round(this.y)];
    //
    //     // check grid
    //     for (let x = currX-1; x < currX+2; x++) {
    //         for (let y = currY-1; y < currY+2; y++) {
    //             if(x > covidGrid.length || x < 0 || y > covidGrid[0].length || y < 0){
    //                 if(covidGrid[x][y]){
    //                     this.covidBar++;
    //                 }
    //             }
    //         }
    //     }
    // }
}

// TODO: keep me
export default Player;