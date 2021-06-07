class Point2d {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `{${this.x}, ${this.y}}`; // {x, y}
    }

    distanceFrom(other2DPoint) {
        return Math.sqrt(Math.pow(this.x - other2DPoint.x, 2) + Math.pow(this.y - other2DPoint.y, 2));
    }

    translate(scalar) {
        return new Point2d(this.x * scalar, this.y * scalar);
    }

    flip() {
        return new Point2d(this.y, this.x);
    }
}

module.exports = Point2d;
