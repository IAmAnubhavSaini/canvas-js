function Circle() {
    this.startAngle = 0;
    this.endAngle = 2 * Math.PI;
    this.antiClockwise = false; /* not needed for circle */
}

Circle.prototype = {
    draw: function (inContext, ofRadius, withPattern, atPosition /* array */) {
        this.in(inContext);
        this.of(ofRadius);
        this.drawWith(withPattern);
        this.drawAt.apply(this, atPosition);
        return this;
    },
    drawAt: function(x, y) {
        this.context.beginPath();
        this.context.arc(x, y, this.radius, this.startAngle, this.endAngle, this.antiClockwise);
        this.context.closePath();
        this.context.stroke();
        return this;
    },
    drawWith: function (options) {
        this.context.strokeStyle = options.strokePattern;
        this.context.lineWidth = options.lineWidth;
        return this;
    },
    fill: function (inContext, ofRadius, withPattern, atPosition /* [10, 10] */) {
        this.in(inContext);
        this.of(ofRadius);
        this.fillWith(withPattern);
        this.fillAt.apply(this, atPosition);
        return this;
    },
    fillAt: function (x, y) {
        this.context.beginPath();
        this.context.arc(x, y, this.radius, this.startAngle, this.endAngle, this.antiClockwise);
        this.context.closePath();
        this.context.fill();
        return this;
    },
    fillWith: function (fillPattern) {
        this.context.fillStyle = fillPattern;
        return this;
    },
    in: function (context) {
        this.context = context;
        return this;
    },
    of: function (radius) {
        this.radius = radius;
        return this;
    }
};

module.exports = {
    Circle: Circle
};
