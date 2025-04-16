"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
class Square {
    context;
    side = 1;
    constructor(context, side = 1) {
        this.side = side;
        this.context = context;
    }
    drawAt(point2d) {
        this.context.fillRect(point2d.X, point2d.Y, this.side, this.side);
        return this;
    }
}
exports.Square = Square;
//# sourceMappingURL=Square.js.map