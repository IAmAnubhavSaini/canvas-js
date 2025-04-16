"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pencil = void 0;
class Pencil {
    context;
    current;
    constructor(context, startAt) {
        this.current = startAt;
        this.context = context;
    }
    lineTo(to) {
        this.context.beginPath();
        this.context.moveTo(this.current.X, this.current.Y);
        this.context.lineTo(to.X, to.Y);
        this.context.stroke();
        this.current = to;
        return this;
    }
}
exports.Pencil = Pencil;
//# sourceMappingURL=Pencil.js.map