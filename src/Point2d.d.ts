interface Point2dI {
    X: number;
    Y: number;
    toString(): string;
    distanceFrom(other2DPoint: Point2dI): number;
    translate(scalar: number): Point2d;
    flip(): Point2d;
}
declare class Point2d implements Point2dI {
    private readonly x;
    private readonly y;
    constructor(x?: number, y?: number);
    get X(): number;
    get Y(): number;
    toString(): string;
    distanceFrom(other2DPoint: Point2dI): number;
    translate(scalar: number): Point2d;
    flip(): Point2d;
}
export { Point2d };
export type { Point2dI };
//# sourceMappingURL=Point2d.d.ts.map