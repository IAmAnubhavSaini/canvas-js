interface Point2dI {
    x: number;
    y: number;
    toString(): string;
    distanceFrom(other2DPoint: Point2dI): number;
    translate(scalar: number): Point2d;
    flip(): Point2d;
}
declare class Point2d implements Point2dI {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    toString(): string;
    distanceFrom(other2DPoint: Point2dI): number;
    translate(scalar: number): Point2d;
    flip(): Point2d;
}
//# sourceMappingURL=Point2d.d.ts.map