import { Spider } from "./spider";

// Test Data:
// 0,0,FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF = ?
// 3,6,FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF = ?
// 0,7,RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR =?

var spider1 = new Spider(0,0,"FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF");
var spider2 = new Spider(3,6,"FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF");
var spider3 = new Spider(0,7,"RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR");

// Assumptions:
// Test Chamber- It says in the spec that 0,0 is the bottom left, but doesn't mention any walls. I'll assume it can move into negative numbers
// Movement - Wasn't specified, but I'll assume that a command to move will make the bot move 1 unit of distance.
// Movement Direction -- Assuming that the bot is aligned correctly, so Forwards/Backwards movement is on Y axis, Left and Right on X axis.
// Realistically we'd have to account for acceleration/deceleration and gained momentum- longer stretched of a single command may have greater impact of position, harder to stop.
// Keeping it simple!