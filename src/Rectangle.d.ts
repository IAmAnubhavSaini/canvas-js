import { Point2dI } from "./Point2d";
interface RectangleI {
    drawAt(point2d: Point2dI): RectangleI;
}
declare class Rectangle implements RectangleI {
    private readonly context;
    private readonly sideShort;
    private readonly sideLong;
    constructor(context: CanvasRenderingContext2D, sideShort?: number, sideLong?: number);
    drawAt(point2d: Point2dI): RectangleI;
}
export { Rectangle };
export type { RectangleI };
//# sourceMappingURL=Rectangle.d.ts.map