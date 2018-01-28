/* global describe it afterEach beforeEach expect spyOn require */

const Circle = require('../src/Circle')
const Position2D = require('../src/Position2D')

describe('A (new Circle())', function () {
    var context
    beforeEach(function () {
        context = {
            name: 'context',
            beginPath: function () { },
            closePath: function () { },
            arc: function () { },
            fill: function () { },
            stroke: function () { }
        }
    })
    afterEach(function () {
        context = null
    })

    it('.startAngle is equals to 0', function () {
        let circle = new Circle(context)
        expect(circle.startAngle).toBe(0)
    })

    it('.endAngle is equals to 2 * PI', function () {
        let circle = new Circle(context)
        expect(circle.endAngle).toBe(2 * Math.PI)
    })

    it('.antiClockwise is equals to false', function () {
        let circle = new Circle(context)
        expect(circle.antiClockwise).toBe(false)
    })

    it('context is set up when created circle object.', function () {
        var context = { name: 'context' }
        let circle = new Circle(context)
        expect(circle.context).toBe(context)
        expect(circle.context.name).toBe('context')
    })

    it('.fillWith(pattern) without setting up context throws up error.', function () {
        let circle = new Circle()
        expect(function () {
            circle.fillWith('red')
        }).toThrowError('Cannot set property \'fillStyle\' of undefined')
    })

    it('.drawWith(pattern) without setting up context throws up error.', function () {
        let circle = new Circle()
        expect(function () {
            circle.drawWith({ strokePattern: 'red', lineWidth: 3 })
        }).toThrowError('Cannot set property \'strokeStyle\' of undefined')
    })

    it('.fillWith(pattern) sets up correct pattern.', function () {
        const context = { name: 'context' }
        let circle = new Circle(context)
        circle.fillWith('red')
        expect(circle.context.fillStyle).toBe('red')
    })

    it('.of(radius) sets up radius property.', function () {
        let circle = new Circle(context)
        circle.of(10)
        expect(circle.radius).toBe(10)
    })

    it('.fill(20, \'red\', [10, 10]) sets up all properties properly', function () {
        let circle = new Circle(context)
        circle.fill(20, 'red', new Position2D(10, 10))
        expect(circle.radius).toBe(20)
        expect(circle.context.fillStyle).toBe('red')
        expect(circle.context).toBe(context)
        expect(circle.context.name).toBe('context')
    })

    it('.draw(20, {strokePattern: \'red\', lineWidth: 3}, [10, 10]) sets up all properties properly', function () {
        let circle = new Circle(context)
        circle.draw(10, { strokePattern: 'red', lineWidth: 3 }, new Position2D(10, 10))
        expect(circle.radius).toBe(10)
        expect(circle.context.strokeStyle).toBe('red')
        expect(circle.context.lineWidth).toBe(3)
        expect(circle.context).toBe(context)
        expect(circle.context.name).toBe('context')
    })
    describe('has context such that', function () {
        it('fill() calls all the functions in, of, fillWith, fillAt call', function () {
            let circle = new Circle(context)
            spyOn(context, 'beginPath')
            spyOn(context, 'closePath')
            spyOn(context, 'arc')
            spyOn(context, 'fill')
            expect(circle.fill(20, 'red', new Position2D(10, 10))).toBe(circle)
            expect(context.beginPath).toHaveBeenCalled()
            expect(context.beginPath).toHaveBeenCalledTimes(1)
            expect(context.closePath).toHaveBeenCalled()
            expect(context.closePath).toHaveBeenCalledTimes(1)
            expect(context.arc).toHaveBeenCalled()
            expect(context.arc).toHaveBeenCalledTimes(1)
            expect(context.fill).toHaveBeenCalled()
            expect(context.fill).toHaveBeenCalledTimes(1)
        })

        it('fillAt() calls context.beginPath()', function () {
            let circle = new Circle(context)
            spyOn(context, 'beginPath')
            circle.fillAt(10, 10)
            expect(context.beginPath).toHaveBeenCalled()
            expect(context.beginPath).toHaveBeenCalledTimes(1)
        })

        it('fillAt() calls context.closePath()', function () {
            let circle = new Circle(context)
            spyOn(context, 'closePath')
            circle.fillAt(10, 10)
            expect(context.closePath).toHaveBeenCalled()
            expect(context.closePath).toHaveBeenCalledTimes(1)
        })

        it('fillAt() calls context.arc()', function () {
            let circle = new Circle(context)
            spyOn(context, 'arc')
            circle.fillAt(10, 10)
            expect(context.arc).toHaveBeenCalled()
            expect(context.arc).toHaveBeenCalledTimes(1)
        })

        it('fillAt() calls context.fill()', function () {
            let circle = new Circle(context)
            spyOn(context, 'fill')
            circle.fillAt(10, 10)
            expect(context.fill).toHaveBeenCalled()
            expect(context.fill).toHaveBeenCalledTimes(1)
        })

        it('draw() calls all the functions in, of, drawWith, drawAt call', function () {
            let circle = new Circle(context)
            spyOn(context, 'beginPath')
            spyOn(context, 'closePath')
            spyOn(context, 'arc')
            spyOn(context, 'stroke')
            expect(circle.draw(20, { strokePattern: 'red', lineWidth: 3 }, new Position2D(10, 10))).toBe(circle)
            expect(context.beginPath).toHaveBeenCalled()
            expect(context.beginPath).toHaveBeenCalledTimes(1)
            expect(context.closePath).toHaveBeenCalled()
            expect(context.closePath).toHaveBeenCalledTimes(1)
            expect(context.arc).toHaveBeenCalled()
            expect(context.arc).toHaveBeenCalledTimes(1)
            expect(context.stroke).toHaveBeenCalled()
            expect(context.stroke).toHaveBeenCalledTimes(1)
        })

        it('drawAt() calls context.beginPath()', function () {
            let circle = new Circle(context)
            spyOn(context, 'beginPath')
            circle.drawAt(10, 10)
            expect(context.beginPath).toHaveBeenCalled()
            expect(context.beginPath).toHaveBeenCalledTimes(1)
        })

        it('drawAt() calls context.closePath()', function () {
            let circle = new Circle(context)
            spyOn(context, 'closePath')
            circle.drawAt(10, 10)
            expect(context.closePath).toHaveBeenCalled()
            expect(context.closePath).toHaveBeenCalledTimes(1)
        })

        it('drawAt() calls context.arc()', function () {
            let circle = new Circle(context)
            spyOn(context, 'arc')
            circle.drawAt(10, 10)
            expect(context.arc).toHaveBeenCalled()
            expect(context.arc).toHaveBeenCalledTimes(1)
        })

        it('drawAt() calls context.fill()', function () {
            let circle = new Circle(context)
            spyOn(context, 'stroke')
            circle.drawAt(10, 10)
            expect(context.stroke).toHaveBeenCalled()
            expect(context.stroke).toHaveBeenCalledTimes(1)
        })
    })
    describe('has functions such that calling them returns same circle object', function () {
        it('draw(in, of, with, at) returns circle object', function () {
            let circle = new Circle(context)
            expect(circle.draw(20, { strokePattern: 'red', lineWidth: 3 }, new Position2D(10, 10))).toBe(circle)
        })

        it('drawAt(x, y) returns circle object', function () {
            let circle = new Circle(context)
            expect(circle.drawAt(10, 20)).toBe(circle)
        })

        it('drawWith(pattern) returns circle object', function () {
            let circle = new Circle(context)
            expect(circle.drawWith({ strokePattern: 'red', lineWidth: 3 })).toBe(circle)
        })

        it('fill(in, of, with, at) returns circle object', function () {
            let circle = new Circle(context)
            expect(circle.fill(20, 'red', new Position2D(10, 10))).toBe(circle)
        })

        it('fillAt(x, y) returns circle object', function () {
            let circle = new Circle(context)
            expect(circle.fillAt(10, 20)).toBe(circle)
        })

        it('fillWith(pattern) returns circle object', function () {
            let circle = new Circle(context)
            expect(circle.fillWith('red')).toBe(circle)
        })

        it('of(radius) returns circle object', function () {
            let circle = new Circle(context)
            expect(circle.of(10)).toBe(circle)
        })
    })
})
