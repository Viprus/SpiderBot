export class Spider{
    positionX: number = 0;
    positionY: number = 0;

    constructor(positionX: number = 0, positionY: number = 0, instructionString: string = "") {
        this.positionX = positionX;
        this.positionY = positionY;
        console.log("Spider Initialized!")
        this.reportPosition();
        this.processCommandString(instructionString);
        this.reportPosition();
    }

    processCommandString(commandString: string){
        console.log(`Executing command string: ${commandString}`)
        var charArray = commandString.split("");
        charArray.forEach(command => this.executeCommand(command));
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
                this.moveRight();
                break;
            case "L":
                this.moveLeft();
                break;
            default:
                console.error(`Unknown command- "${command}", skipping.`);
        }
    }

    reportPosition(): void {
        //Ideally would return a 2D Vector, but just printing for this example.
        console.log(`Current Position: (${this.getPositionX()},${this.getPositionY()})`);
    }

    getPositionX(): number {
        return this.positionX;
    }

    getPositionY(): number {
        return this.positionY;
    }

    moveForwards(): void {
        this.positionY += 1;
    }

    moveBackwards(): void {
        this.positionY -= 1;
    }

    moveLeft(): void {
        this.positionX -= 1;
    }

    moveRight(): void {
        this.positionX += 1;
    }
}