import {Point2dI} from "./Point2d";

interface RectangleI {
    drawAt(point2d: Point2dI): RectangleI;
}

class Rectangle implements RectangleI {
    private readonly context: CanvasRenderingContext2D;
    private readonly sideShort: number = 1;
    private readonly sideLong: number = 1;

    constructor(context: CanvasRenderingContext2D, sideShort: number = 1, sideLong: number = 2) {
        this.sideShort = sideShort;
        this.sideLong = sideLong;
        this.context = context;
    }

    drawAt(point2d: Point2dI): RectangleI {
        this.context.fillRect(point2d.X, point2d.Y, this.sideShort, this.sideLong);
        return this;
    }
}

export {
    Rectangle
};

export type {RectangleI};
