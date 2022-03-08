import Directions from "./directions";
import { Spider } from "./spider"

export class WallSpider extends Spider{
    direction: [number, number] = Directions.UP;

    constructor(positionX: number = 0, positionY: number = 0, instructionString: string = "") {
        super(positionX, positionY, instructionString);
        this.direction = Directions.UP;
    }

    initialize(): void {
        if(this.positionX < 0 || this.positionY < 0){
            console.error("Location error- I'm not attached to a window!");
            throw new Error("Error- Fatal: Position out of bounds");
        }
        super.initialize();
    }

    executeCommand(command: string){
        switch(command){
            case "F":
                this.moveForwards();
                break;
            case "B":
                this.moveBackwards();
                break;
            case "R":
                this.turnRight();
                break;
            case "L":
                this.turnLeft();
                break;
            default:
                console.error(`Unknown command- "${command}", skipping.`);
        }
    }

    moveForwards(): void {
        var newPositionX = this.positionX + this.direction[0];
        var newPositionY = this.positionY + this.direction[1];
        if(newPositionX < 0 || newPositionY < 0){
            return console.error("Nope, Not walking off the edge, thanks anyway.")
        }
        this.positionX = newPositionX;
        this.positionY = newPositionY;
        
    }

    moveBackwards(): void {
        this.turnLeft();
        this.turnLeft();
        this.moveForwards();
    }

    turnLeft(): void {
        switch (this.direction){
            case Directions.UP:
                this.direction = Directions.LEFT;
                break;
            case Directions.RIGHT:
                this.direction = Directions.UP;
                break;
            case Directions.DOWN:
                this.direction = Directions.RIGHT;
                break;
            case Directions.LEFT:
                this.direction = Directions.DOWN;
                break;
            default:
                console.error("Unknown Direction");
                throw new Error("Unknown Direction");
        }
    }

    turnRight(): void {
        switch (this.direction){
            case Directions.UP:
                this.direction = Directions.RIGHT;
                break;
            case Directions.RIGHT:
                this.direction = Directions.DOWN;
                break;
            case Directions.DOWN:
                this.direction = Directions.LEFT;
                break;
            case Directions.LEFT:
                this.direction = Directions.UP;
                break;
            default:
                console.error("Unknown Direction");
                throw new Error("Unknown Direction");
        }
    }

    /**
    * @deprecated The method should not be used
    */
    moveLeft(): void {
        console.warn("Deprecated, please use Turn Left.")
    }

    /**
    * @deprecated The method should not be used
    */
    moveRight(): void {
        console.warn("Deprecated, please use Turn Right.")
    }
}
