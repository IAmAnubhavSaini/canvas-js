import {Point2dI} from "./Point2d";

interface SquareI {
    context: CanvasRenderingContext2D;
    side: number;

    drawAt(point2d: Point2dI): SquareI;
}

class Square implements SquareI {
    context: CanvasRenderingContext2D;
    side: number = 1;

    constructor(context: CanvasRenderingContext2D, side: number = 1) {
        this.side = side;
        this.context = context;
    }

    drawAt(point2d: Point2dI) {
        this.context.fillRect(point2d.x, point2d.y, this.side, this.side);
        return this;
    }
}

export {
    Square, SquareI
};
