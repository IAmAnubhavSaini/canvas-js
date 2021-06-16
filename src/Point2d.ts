interface Point2dI {
    X: number
    Y: number

    toString(): string;

    distanceFrom(other2DPoint: Point2dI): number;

    translate(scalar: number): Point2d;

    flip(): Point2d;
}

class Point2d implements Point2dI {
    private readonly x: number;
    private readonly y: number;

    constructor(x: number = 0, y: number = 0) {
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

    distanceFrom(other2DPoint: Point2dI) {
        return Math.sqrt(Math.pow(this.x - other2DPoint.X, 2) + Math.pow(this.y - other2DPoint.Y, 2));
    }

    translate(scalar: number) {
        return new Point2d(this.x * scalar, this.y * scalar);
    }

    flip() {
        return new Point2d(this.y, this.x);
    }
}

export {Point2d};

export type {Point2dI};
