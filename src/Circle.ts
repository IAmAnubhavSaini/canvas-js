import {Point2dI} from "./Point2d";

type StrokePatternT = string | CanvasGradient | CanvasPattern

interface DrawPatternI {
    strokePattern: StrokePatternT,
    lineWidth: number
}

interface CircleI {
    startAngle: number;
    endAngle: number;
    antiClockwise: boolean;
    context: CanvasRenderingContext2D;
    radius: number;

    draw(ofRadius: number, withPattern: DrawPatternI, atPosition: Point2dI): CircleI;

    drawAt(point: Point2dI): CircleI;

    drawWith(options: DrawPatternI): CircleI;

    fill(ofRadius: number, withPattern: string, atPosition: Point2dI): CircleI;

    fillAt(point: Point2dI): CircleI;

    fillWith(fillPattern: StrokePatternT): CircleI;

    of(radius: number): CircleI;
}

class Circle implements CircleI {
    startAngle: number;
    endAngle: number;
    antiClockwise: boolean;
    context: CanvasRenderingContext2D;
    radius: number = 0;


    constructor(context: CanvasRenderingContext2D) {
        this.startAngle = 0;
        this.endAngle = 2 * Math.PI;
        this.antiClockwise = false;
        this.context = context;
    }

    draw(ofRadius: number, withPattern: DrawPatternI, atPosition: Point2dI) {
        this.of(ofRadius);
        this.drawWith(withPattern);
        this.drawAt(atPosition);
        return this;
    }

    drawAt(point: Point2dI) {
        this.context.beginPath();
        this.context.arc(point.x, point.y, this.radius, this.startAngle, this.endAngle, this.antiClockwise);
        this.context.closePath();
        this.context.stroke();
        return this;
    }

    drawWith(options: DrawPatternI) {
        this.context.strokeStyle = options.strokePattern;
        this.context.lineWidth = options.lineWidth;
        return this;
    }

    fill(ofRadius: number, withPattern: string, atPosition: Point2dI) {
        this.of(ofRadius);
        this.fillWith(withPattern);
        this.fillAt(atPosition);
        return this;
    }

    fillAt(point: Point2dI) {
        this.context.beginPath();
        this.context.arc(point.x, point.y, this.radius, this.startAngle, this.endAngle, this.antiClockwise);
        this.context.closePath();
        this.context.fill();
        return this;
    }

    fillWith(fillPattern: StrokePatternT) {
        this.context.fillStyle = fillPattern;
        return this;
    }

    of(radius: number) {
        this.radius = radius;
        return this;
    }
}

export { Circle, CircleI }
