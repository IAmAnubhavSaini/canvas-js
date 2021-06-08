import { Point2dI } from "./Point2d";
declare type StrokePatternT = string | CanvasGradient | CanvasPattern;
interface DrawPatternI {
    strokePattern: StrokePatternT;
    lineWidth: number;
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
declare class Circle implements CircleI {
    startAngle: number;
    endAngle: number;
    antiClockwise: boolean;
    context: CanvasRenderingContext2D;
    radius: number;
    constructor(context: CanvasRenderingContext2D);
    draw(ofRadius: number, withPattern: DrawPatternI, atPosition: Point2dI): this;
    drawAt(point: Point2dI): this;
    drawWith(options: DrawPatternI): this;
    fill(ofRadius: number, withPattern: string, atPosition: Point2dI): this;
    fillAt(point: Point2dI): this;
    fillWith(fillPattern: StrokePatternT): this;
    of(radius: number): this;
}
export { Circle, CircleI };
//# sourceMappingURL=Circle.d.ts.map