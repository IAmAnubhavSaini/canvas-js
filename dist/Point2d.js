"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2d = void 0;
class Point2d {
    x;
    y;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    get X() {
        return this.x;
    }
    get Y() {
        return this.y;
    }
    toString() {
        return `{${this.x}, ${this.y}}`; // {x, y}
    }
    distanceFrom(other2DPoint) {
        return Math.sqrt(Math.pow(this.x - other2DPoint.X, 2) + Math.pow(this.y - other2DPoint.Y, 2));
    }
    translate(scalar) {
        return new Point2d(this.x * scalar, this.y * scalar);
    }
    flip() {
        return new Point2d(this.y, this.x);
    }
}
exports.Point2d = Point2d;
//# sourceMappingURL=Point2d.js.map