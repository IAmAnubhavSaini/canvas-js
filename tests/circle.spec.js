describe('A (new Circle())', function () {
    var circle;
    beforeEach(function () {
        circle = new Circle();
    });
    afterEach(function () {
        circle = null;
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
    it('.in(context) sets up context property.', function () {
        var context = { name: 'context' };
        circle.in(context);
        expect(circle.context).toBe(context);
        expect(circle.context.name).toBe('context');
    });
    it('.with(pattern) without setting up context via in() throws up error.', function () {
        expect(function () {
            circle.with('red')
        }).toThrowError('undefined is not an object (evaluating \'this.context.fillStyle = fillPattern\')');
    });
    it('.in(context).with(pattern) sets up correct pattern.', function () {
        var context = { name: 'context' };
        circle.in(context).with('red');
        expect(circle.context.fillStyle).toBe('red');
    });
    it('.of(radius) sets up radius property.', function () {
        circle.of(10);
        expect(circle.radius).toBe(10);
    });

    describe('has context such that', function () {
        var context;
        beforeEach(function () {
            context = {
                name: 'context',
                beginPath: function () {},
                closePath: function () {},
                arc: function () {},
                fill: function () {}
            };
        });
        afterEach(function () {
            context = null;
        });
        it('at() calls context.beginPath()', function () {
            spyOn(context, 'beginPath');
            circle.in(context).at(10, 10);
            expect(context.beginPath).toHaveBeenCalled();
            expect(context.beginPath).toHaveBeenCalledTimes(1);
        });
        it('at() calls context.closePath()', function () {
            spyOn(context, 'closePath');
            circle.in(context).at(10, 10);
            expect(context.closePath).toHaveBeenCalled();
            expect(context.closePath).toHaveBeenCalledTimes(1);
        });
        it('at() calls context.arc()', function () {
            spyOn(context, 'arc');
            circle.in(context).at(10, 10);
            expect(context.arc).toHaveBeenCalled();
            expect(context.arc).toHaveBeenCalledTimes(1);
        });
        it('at() calls context.fill()', function () {
            spyOn(context, 'fill');
            circle.in(context).at(10, 10);
            expect(context.fill).toHaveBeenCalled();
            expect(context.fill).toHaveBeenCalledTimes(1);
        });
    });
    describe('has functions such that calling them returns same circle object', function () {
        var context;
        beforeEach(function () {
            context = {
                name: 'context',
                beginPath: function () {},
                closePath: function () {},
                arc: function () {},
                fill: function () {}
            };
        });
        afterEach(function () {
            context = null;
        });
        it('in(context) returns circle object', function () {
            expect(circle.in(context)).toBe(circle);
        });
        it('with(pattern) returns circle object', function () {
            expect(circle.in(context).with('red')).toBe(circle);
        });
        it('of(radius) returns circle object', function () {
            expect(circle.of(10)).toBe(circle);
        });
        it('at(x, y) returns circle object', function () {
            expect(circle.in(context).at(10, 20)).toBe(circle);
        });
    });
});
