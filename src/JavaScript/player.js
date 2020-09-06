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

        // TODO: check if this works with REACT app
        window.addEventListener("keydown", (event) => this.keyDown(event));
        window.addEventListener("keyup", (event) => this.keyUp(event));

        this.tick = this.tick.bind(this);
    }
    keyDown(event){
        this.keysDown.add(event.key);
    }
    keyUp(event){
        if(this.keysDown.has(event.key)){
            this.keysDown.delete(event.key);
        }
    }
    tick(grid, enemies){
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
        else if(this.keysDown.has("D") || this.keysDown.has("D") || this.keysDown.has("ArrowRight")){
            totX += this.speed;
        }
        else if(this.keysDown.has("S") || this.keysDown.has("s") || this.keysDown.has("ArrowDown")){
            totY -= this.speed;
        }
        else if(this.keysDown.has("A") || this.keysDown.has("a") || this.keysDown.has("ArrowLeft")){
            totX -= this.speed;
        }
        this.move(totX, totY, grid);

        // TODO: if dead return false
        return true;
    }
    componentWillUnmount(){
        window.removeEventListener("keydown", (event) => this.keyDown(event));
        window.removeEventListener("keyup", (event) => this.keyUp(event));
    }
}

export default Player;