"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    context;
    sideShort = 1;
    sideLong = 1;
    constructor(context, sideShort = 1, sideLong = 2) {
        this.sideShort = sideShort;
        this.sideLong = sideLong;
        this.context = context;
    }
    drawAt(point2d) {
        this.context.fillRect(point2d.X, point2d.Y, this.sideShort, this.sideLong);
        return this;
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=Rectangle.js.map