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
    draw(ofRadius: number, withPattern: DrawPatternI, atPosition: [number, number]): CircleI;
    drawAt(x: number, y: number): CircleI;
    drawWith(options: DrawPatternI): CircleI;
    fill(ofRadius: number, withPattern: string, atPosition: [number, number]): CircleI;
    fillAt(x: number, y: number): CircleI;
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
    draw(ofRadius: number, withPattern: DrawPatternI, atPosition: [number, number]): this;
    drawAt(x: number, y: number): this;
    drawWith(options: DrawPatternI): this;
    fill(ofRadius: number, withPattern: string, atPosition: [number, number]): this;
    fillAt(x: number, y: number): this;
    fillWith(fillPattern: StrokePatternT): this;
    of(radius: number): this;
}
//# sourceMappingURL=Circle.d.ts.map