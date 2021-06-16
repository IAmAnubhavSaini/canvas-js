import {Point2dI} from "./Point2d";

type StrokePatternT = string | CanvasGradient | CanvasPattern

interface DrawPatternI {
    strokePattern: StrokePatternT,
    lineWidth: number
}

interface CircleI {
    draw(withPattern: DrawPatternI, atPosition: Point2dI): CircleI;

    drawAt(point: Point2dI): CircleI;

    drawWith(options: DrawPatternI): CircleI;

    fill(withPattern: string, atPosition: Point2dI): CircleI;

    fillAt(point: Point2dI): CircleI;

    fillWith(fillPattern: StrokePatternT): CircleI;
}

class Circle implements CircleI {
    private readonly startAngle: number;
    private readonly endAngle: number;
    private readonly antiClockwise: boolean;
    private readonly context: CanvasRenderingContext2D;
    private readonly radius: number = 1;

    constructor(context: CanvasRenderingContext2D, radius: number = 1) {
        this.startAngle = 0;
        this.endAngle = 2 * Math.PI;
        this.antiClockwise = false;
        this.context = context;
        this.radius = radius;
    }

    draw(withPattern: DrawPatternI, atPosition: Point2dI) {
        this.drawWith(withPattern);
        this.drawAt(atPosition);
        return this;
    }

    drawAt(point: Point2dI) {
        this.context.beginPath();
        this.context.arc(point.X, point.Y, this.radius, this.startAngle, this.endAngle, this.antiClockwise);
        this.context.closePath();
        this.context.stroke();
        return this;
    }

    drawWith(options: DrawPatternI) {
        this.context.strokeStyle = options.strokePattern;
        this.context.lineWidth = options.lineWidth;
        return this;
    }

    fill(withPattern: string, atPosition: Point2dI) {
        this.fillWith(withPattern);
        this.fillAt(atPosition);
        return this;
    }

    fillAt(point: Point2dI) {
        this.context.beginPath();
        this.context.arc(point.X, point.Y, this.radius, this.startAngle, this.endAngle, this.antiClockwise);
        this.context.closePath();
        this.context.fill();
        return this;
    }

    fillWith(fillPattern: StrokePatternT) {
        this.context.fillStyle = fillPattern;
        return this;
    }
}

export {Circle};

export type {CircleI};
