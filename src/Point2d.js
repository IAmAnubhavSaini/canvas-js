"use strict";
var Point2d = /** @class */ (function () {
    function Point2d(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point2d.prototype.toString = function () {
        return "{" + this.x + ", " + this.y + "}"; // {x, y}
    };
    Point2d.prototype.distanceFrom = function (other2DPoint) {
        return Math.sqrt(Math.pow(this.x - other2DPoint.x, 2) + Math.pow(this.y - other2DPoint.y, 2));
    };
    Point2d.prototype.translate = function (scalar) {
        return new Point2d(this.x * scalar, this.y * scalar);
    };
    Point2d.prototype.flip = function () {
        return new Point2d(this.y, this.x);
    };
    return Point2d;
}());
module.exports = Point2d;
//# sourceMappingURL=Point2d.js.map