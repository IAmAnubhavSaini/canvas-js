import { Point2dI } from "./Point2d";
declare type StrokePatternT = string | CanvasGradient | CanvasPattern;
interface DrawPatternI {
    strokePattern: StrokePatternT;
    lineWidth: number;
}
interface CircleI {
    draw(withPattern: DrawPatternI, atPosition: Point2dI): CircleI;
    drawAt(point: Point2dI): CircleI;
    drawWith(options: DrawPatternI): CircleI;
    fill(withPattern: string, atPosition: Point2dI): CircleI;
    fillAt(point: Point2dI): CircleI;
    fillWith(fillPattern: StrokePatternT): CircleI;
}
declare class Circle implements CircleI {
    private readonly startAngle;
    private readonly endAngle;
    private readonly antiClockwise;
    private readonly context;
    private readonly radius;
    constructor(context: CanvasRenderingContext2D, radius?: number);
    draw(withPattern: DrawPatternI, atPosition: Point2dI): this;
    drawAt(point: Point2dI): this;
    drawWith(options: DrawPatternI): this;
    fill(withPattern: string, atPosition: Point2dI): this;
    fillAt(point: Point2dI): this;
    fillWith(fillPattern: StrokePatternT): this;
}
export { Circle };
export type { CircleI };
//# sourceMappingURL=Circle.d.ts.map