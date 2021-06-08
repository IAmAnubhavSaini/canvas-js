type StrokePatternT = string | CanvasGradient | CanvasPattern

interface DrawPatternI {
    strokePattern: StrokePatternT,
    lineWidth: number
}

class Circle {
    startAngle: number;
    endAngle: number;
    antiClockwise: boolean;
    context: CanvasRenderingContext2D;
    radius: number = 0;


    constructor(context: CanvasRenderingContext2D) {
        this.startAngle = 0;
        this.endAngle = 2 * Math.PI;
        this.antiClockwise = false;
        this.context = context;
    }

    draw(ofRadius: number, withPattern: DrawPatternI, atPosition: [number, number]) {
        this.of(ofRadius);
        this.drawWith(withPattern);
        this.drawAt.apply(this, atPosition);
        return this;
    }

    drawAt(x: number, y: number) {
        this.context.beginPath();
        this.context.arc(x, y, this.radius, this.startAngle, this.endAngle, this.antiClockwise);
        this.context.closePath();
        this.context.stroke();
        return this;
    }

    drawWith(options: DrawPatternI) {
        this.context.strokeStyle = options.strokePattern;
        this.context.lineWidth = options.lineWidth;
        return this;
    }

    fill(ofRadius: number, withPattern: string, atPosition: [number, number]) {
        this.of(ofRadius);
        this.fillWith(withPattern);
        this.fillAt.apply(this, atPosition);
        return this;
    }

    fillAt(x: number, y: number) {
        this.context.beginPath();
        this.context.arc(x, y, this.radius, this.startAngle, this.endAngle, this.antiClockwise);
        this.context.closePath();
        this.context.fill();
        return this;
    }

    fillWith(fillPattern: StrokePatternT) {
        this.context.fillStyle = fillPattern;
        return this;
    }

    of(radius: number) {
        this.radius = radius;
        return this;
    }
}

module.exports = Circle;
