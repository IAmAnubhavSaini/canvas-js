import { Point2dI } from "./Point2d";
interface SquareI {
    drawAt(point2d: Point2dI): SquareI;
}
declare class Square implements SquareI {
    private readonly context;
    private readonly side;
    constructor(context: CanvasRenderingContext2D, side?: number);
    drawAt(point2d: Point2dI): SquareI;
}
export { Square };
export type { SquareI };
//# sourceMappingURL=Square.d.ts.map