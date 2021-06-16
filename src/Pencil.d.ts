import { Point2dI } from "./Point2d";
interface PencilI {
    lineTo(point2d: Point2dI): PencilI;
}
declare class Pencil implements PencilI {
    private readonly context;
    private current;
    constructor(context: CanvasRenderingContext2D, startAt: Point2dI);
    lineTo(to: Point2dI): PencilI;
}
export { Pencil };
export type { PencilI };
//# sourceMappingURL=Pencil.d.ts.map