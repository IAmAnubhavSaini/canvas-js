interface Point2dI {
    x: number;
    y: number;

    toString(): string;

    distanceFrom(other2DPoint: Point2dI): number;

    translate(scalar: number): Point2d;

    flip(): Point2d;
}

class Point2d implements Point2dI {
    x: number;
    y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `{${this.x}, ${this.y}}`; // {x, y}
    }

    distanceFrom(other2DPoint: Point2dI) {
        return Math.sqrt(Math.pow(this.x - other2DPoint.x, 2) + Math.pow(this.y - other2DPoint.y, 2));
    }

    translate(scalar: number) {
        return new Point2d(this.x * scalar, this.y * scalar);
    }

    flip() {
        return new Point2d(this.y, this.x);
    }
}

module.exports = Point2d;
