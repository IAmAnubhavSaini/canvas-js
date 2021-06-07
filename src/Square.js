class Square {
    constructor(side = 1) {
        this.side = side;
    }

    drawAt(point2d) {
        this.context.fillRect(point2d.x, point2d.y, this.side, this.side);
        return this;
    }

    in(context) {
        this.context = context;
        return this;
    }
}

module.exports = Square;
