import Movable from "./movable";
import * as Constants from "./constants";

class Player extends Movable{
    constructor(startX, startY){
        super(startX, startY);

        this.baseSpeed = Constants.baseSpeed;
        this.speed = this.baseSpeed;

        this.covidBar = 0; // out of 100

        this.inventory = null;

        this.keysDown = new Set();

        this.time = 0;

        // TODO: check if this works with REACT app
        window.addEventListener("keydown", (event) => this.keyDown(event));
        window.addEventListener("keyup", (event) => this.keyUp(event));

        this.tick = this.tick.bind(this);
    }
    keyDown(event){
        console.log("key down");
        this.keysDown.add(event.key);
    }
    keyUp(event){
        console.log("key up");
        if(this.keysDown.has(event.key)){
            this.keysDown.delete(event.key);
        }
    }
    tick(grid, enemies){
        this.time++;

        const [currX, currY] = this.getGridPos();

        // damage
        enemies.map((value, index) => {
            this.covidBar += value.calculateDamage(this.x, this.y);
        });

        // move
        let [totX, totY] = [0, 0];
        if(this.keysDown.has("W") || this.keysDown.has("w") || this.keysDown.has("ArrowUp")){
            totY += this.speed;
        }
        if(this.keysDown.has("D") || this.keysDown.has("d") || this.keysDown.has("ArrowRight")){
            totX += this.speed;
        }
        if(this.keysDown.has("S") || this.keysDown.has("s") || this.keysDown.has("ArrowDown")){
            totY -= this.speed;
        }
        if(this.keysDown.has("A") || this.keysDown.has("a") || this.keysDown.has("ArrowLeft")){
            totX -= this.speed;
        }
        // console.log(`play: tX: ${totX}, tY: ${totY}`);
        this.move(totX, totY, grid);

        // TODO: if dead return false
        return true;
    }
}

export default Player;