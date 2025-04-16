"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    startAngle;
    endAngle;
    antiClockwise;
    context;
    radius = 1;
    constructor(context, radius = 1) {
        this.startAngle = 0;
        this.endAngle = 2 * Math.PI;
        this.antiClockwise = false;
        this.context = context;
        this.radius = radius;
    }
    draw(withPattern, atPosition) {
        this.drawWith(withPattern);
        this.drawAt(atPosition);
        return this;
    }
    drawAt(point) {
        this.context.beginPath();
        this.context.arc(point.X, point.Y, this.radius, this.startAngle, this.endAngle, this.antiClockwise);
        this.context.closePath();
        this.context.stroke();
        return this;
    }
    drawWith(options) {
        this.context.strokeStyle = options.strokePattern;
        this.context.lineWidth = options.lineWidth;
        return this;
    }
    fill(withPattern, atPosition) {
        this.fillWith(withPattern);
        this.fillAt(atPosition);
        return this;
    }
    fillAt(point) {
        this.context.beginPath();
        this.context.arc(point.X, point.Y, this.radius, this.startAngle, this.endAngle, this.antiClockwise);
        this.context.closePath();
        this.context.fill();
        return this;
    }
    fillWith(fillPattern) {
        this.context.fillStyle = fillPattern;
        return this;
    }
}
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map