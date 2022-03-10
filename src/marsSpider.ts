import Directions from "./directions";
import { WallSpider } from "./wallSpider"

export class MarsSpider extends WallSpider{
    direction: [number, number] = Directions.UP;
    fuel: number;
    boosterStrength: number;

    constructor(positionX: number = 0, positionY: number = 0, instructionString: string = "") {
        super(positionX, positionY, instructionString);
        this.direction = Directions.UP;
        this.fuel = 30;
        this.boosterStrength = 0;
    }

    initialize(): void {
        console.log("MarsSpider Initialized!")
        this.reportPosition();
        this.processCommandString(this.instructionString);
        this.reportPosition();
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
                let value = parseInt(command);
                if(value !== NaN){
                    this.setBoosterStrength(value);
                    break;
                }
                console.error(`Unknown command- "${command}", skipping.`);
        }
    }

    setBoosterStrength(value: number): void {
        if(this.boosterStrength == 0){
            this.boosterStrength = value;
            return;
        }
        //Even though we cap at 5 before overheating, wanted to handle multiple digits (eg. 157F)
        this.boosterStrength = parseInt(`${this.boosterStrength}${value}`);
    }

    moveForwards(): void {
        let movementVector = this.direction.slice();
        if(this.boosterStrength > 0){
            if(this.boosterStrength > 5){
                //FATAL ERROR- Don't want to continue program as spider may walk into a crater as next step.
                const error = new Error(`Cannot boost more than 5 units at a time to avoid overheating. Input was ${this.boosterStrength}`);
                console.error(error);
                throw error;
            }
            if(this.boosterStrength > this.fuel) {
                //FATAL ERROR- Don't want to do partial boost into a hole and lose the unit!
                const error = new Error(`Not enough fuel to perform boost. Requires ${this.boosterStrength}, but only ${this.fuel} is available.`);
                console.error(error);
                throw error;
            }
            movementVector[0] *= this.boosterStrength;
            movementVector[1] *= this.boosterStrength;
        }

        this.positionX = this.positionX + movementVector[0];
        this.positionY = this.positionY + movementVector[1];
        this.fuel -= this.boosterStrength;
        this.boosterStrength = 0;
    }
}
