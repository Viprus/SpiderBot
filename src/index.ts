import { MarsSpider } from "./marsSpider";
import { Spider } from "./spider";
import { WallSpider } from "./wallSpider";

// Test Data:
// 0,0,FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF = ?
// 3,6,FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF = ?
// 0,7,RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR =?

var spider1 = new Spider(0,0,"FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF");
spider1.initialize();
var spider2 = new Spider(3,6,"FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF");
spider2.initialize();
var spider3 = new Spider(0,7,"RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR");
spider3.initialize();

// Assumptions:
// Test Chamber- It says in the spec that 0,0 is the bottom left, but doesn't mention any walls. I'll assume it can move into negative numbers
// Movement - Wasn't specified, but I'll assume that a command to move will make the bot move 1 unit of distance.
// Movement Direction -- Assuming that the bot is aligned correctly, so Forwards/Backwards movement is on Y axis, Left and Right on X axis.
// Realistically we'd have to account for acceleration/deceleration and gained momentum- longer stretched of a single command may have greater impact of position, harder to stop.
// Keeping it simple!

var wallSpider1 = new WallSpider(0,0,"FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF");
wallSpider1.initialize();
var wallSpider2 = new WallSpider(3,6,"FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF");
wallSpider2.initialize();
var wallSpider3 = new WallSpider(0,7,"RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR");
wallSpider3.initialize();

var marsSpider1 = new MarsSpider(0,0, "FFFFFF3FLFFFFFFR5FL");
marsSpider1.initialize();
var marsSpider2 = new MarsSpider(4,3, "FFFFFFFF5FRFFFFFF3FRFFFFFFLFFFFF5FFF5FFFFFFFLFFFFF");
marsSpider2.initialize();