class Circle {
    constructor (context) {
        this.context = context
        this.startAngle = 0
        this.endAngle = 2 * Math.PI
        this.antiClockwise = false
    }

    draw (ofRadius, withPattern, atPosition) {
        this.of(ofRadius)
        this.drawWith(withPattern)
        this.drawAt.apply(this, atPosition.toArray())
        return this
    }

    drawAt (x, y) {
        this.context.beginPath()
        this.context.arc(x, y, this.radius, this.startAngle, this.endAngle, this.antiClockwise)
        this.context.closePath()
        this.context.stroke()
        return this
    }

    drawWith (options) {
        this.context.strokeStyle = options.strokePattern
        this.context.lineWidth = options.lineWidth
        return this
    }

    fill (ofRadius, withPattern, atPosition) {
        this.of(ofRadius)
        this.fillWith(withPattern)
        this.fillAt.apply(this, atPosition.toArray())
        return this
    }

    fillAt (x, y) {
        this.context.beginPath()
        this.context.arc(x, y, this.radius, this.startAngle, this.endAngle, this.antiClockwise)
        this.context.closePath()
        this.context.fill()
        return this
    }

    fillWith (fillPattern) {
        this.context.fillStyle = fillPattern
        return this
    }

    of (radius) {
        this.radius = radius
        return this
    }
}

module.exports = Circle
