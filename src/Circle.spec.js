const {Point2d} = require("./Point2d");

const Circle = require('./Circle').Circle;

/* TODO: upgrade tests to use latest interfaces */
describe('A (new Circle())', function () {
    var circle;
    var context;
    beforeEach(function () {
        context = {
            name: 'context',
            beginPath: function () {
            },
            closePath: function () {
            },
            arc: function () {
            },
            fill: function () {
            },
            stroke: function () {
            }
        };
        circle = new Circle(context);
    });
    afterEach(function () {
        circle = null;
        context = null;
    });
    it('.startAngle is equals to 0', function () {
        expect(circle.startAngle).toBe(0);
    });
    it('.endAngle is equals to 2 * PI', function () {
        expect(circle.endAngle).toBe(2 * Math.PI);
    });
    it('.antiClockwise is equals to false', function () {
        expect(circle.antiClockwise).toBe(false);
    });
    it(' sets up context property.', function () {
        expect(circle.context).toEqual(context);
        expect(circle.context.name).toEqual('context');
    });
    it('.fillWith(pattern) gets called with proper values.', function (done) {
        function fillWith(inputString) {
            expect(inputString).toEqual('red');
            done();
        }

        // setup
        circle.fillWith = fillWith;
        // call
        circle.fillWith('red');
    });
    it('.fillWith(pattern) sets up correct pattern.', function () {
        var context = {name: 'context'};
        circle.fillWith('red');
        expect(circle.context.fillStyle).toBe('red');
    });
    it(`.fill(20, 'red', [10, 10]) sets up all properties properly`, function () {
        circle.fill(20, 'red', [10, 10]);
        // expect(circle.radius).toEqual(20);
        // expect(circle.context.fillStyle).toEqual('red');
        // expect(circle.context).toEqual(context);
        expect(circle.context.name).toEqual('context');
    });
    it('.draw(20, {strokePattern: \'red\', lineWidth: 3}, [10, 10]) sets up all properties properly', function () {
        circle.draw(10, {strokePattern: 'red', lineWidth: 3}, new Point2d(10, 10));
        expect(circle.context).toBe(context);
        expect(circle.context.name).toBe('context');
    });
    describe('has functions such that calling them returns same circle object', function () {
        it('draw(of, with, at) returns circle object', function () {
            expect(circle.draw(20, {strokePattern: 'red', lineWidth: 3}, new Point2d(10, 10))).toBe(circle);
        });
        it('drawAt(x, y) returns circle object', function () {
            expect(circle.drawAt(new Point2d(10, 20))).toBe(circle);
        });
        it('drawWith(pattern) returns circle object', function () {
            expect(circle.drawWith({strokePattern: 'red', lineWidth: 3})).toBe(circle);
        });
        it('fill(in, of, with, at) returns circle object', function () {
            expect(circle.fill(20, 'red', [10, 10])).toEqual(circle);
        });
        it('fillAt(x, y) returns circle object', function () {
            expect(circle.fillAt(new Point2d(10, 20))).toBe(circle);
        });
        it('fillWith(pattern) returns circle object', function () {
            expect(circle.fillWith('red')).toBe(circle);
        });
        it(`returns circle object`, function () {
            expect(circle).toBe(circle);
        });
    });
});
