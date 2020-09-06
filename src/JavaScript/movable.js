class Movable{      // TODO: yes
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
    }
    move(xMove, yMove, grid){
        const [currX, currY] = [Math.floor(this.x), Math.floor(this.y)];

        if(xMove > 0){
            for (let i = currX; i < currX+xMove; i++) {

            }
        }
    }
}

// TODO: keep me
export default Movable;