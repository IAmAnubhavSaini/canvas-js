declare type StrokePatternT = string | CanvasGradient | CanvasPattern;
interface DrawPatternI {
    strokePattern: StrokePatternT;
    lineWidth: number;
}
declare class Circle {
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