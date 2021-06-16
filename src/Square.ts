import {Point2dI} from "./Point2d";

interface SquareI {
    drawAt(point2d: Point2dI): SquareI;
}

class Square implements SquareI {
    private readonly context: CanvasRenderingContext2D;
    private readonly side: number = 1;

    constructor(context: CanvasRenderingContext2D, side: number = 1) {
        this.side = side;
        this.context = context;
    }

    drawAt(point2d: Point2dI): SquareI {
        this.context.fillRect(point2d.X, point2d.Y, this.side, this.side);
        return this;
    }
}

export {
    Square
};

export type {
    SquareI
};
