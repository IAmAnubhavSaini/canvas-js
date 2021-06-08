import { Point2dI } from "./Point2d";
interface SquareI {
    context: CanvasRenderingContext2D;
    side: number;
    drawAt(point2d: Point2dI): SquareI;
}
declare class Square implements SquareI {
    context: CanvasRenderingContext2D;
    side: number;
    constructor(context: CanvasRenderingContext2D, side?: number);
    drawAt(point2d: Point2dI): this;
}
export { Square, SquareI };
//# sourceMappingURL=Square.d.ts.map