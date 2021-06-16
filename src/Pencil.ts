import {Point2dI} from "./Point2d";

interface PencilI {
    lineTo(point2d: Point2dI): PencilI;
}

class Pencil implements PencilI {
    private readonly context: CanvasRenderingContext2D;
    private current: Point2dI;

    constructor(context: CanvasRenderingContext2D, startAt: Point2dI) {
        this.current = startAt;
        this.context = context;
    }

    lineTo(to: Point2dI): PencilI {
        this.context.beginPath();
        this.context.moveTo(this.current.X, this.current.Y);
        this.context.lineTo(to.X, to.Y);
        this.context.stroke();
        this.current = to;
        return this;
    }
}

export {
    Pencil
};

export type {
    PencilI
};
