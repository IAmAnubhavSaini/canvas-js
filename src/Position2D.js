class Position2D {
    constructor (x = 0, y = 0) {
        this.x = x
        this.y = y
    }
    toArray () {
        return [this.x, this.y]
    }
}

module.exports = Position2D
