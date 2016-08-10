describe('A (new Circle())', function () {
    var circle;
    var context;
    beforeEach(function () {
        circle = new Circle();
        context = {
            name: 'context',
            beginPath: function () {},
            closePath: function () {},
            arc: function () {},
            fill: function () {},
            stroke: function () {}
        };
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
    it('.in(context) sets up context property.', function () {
        var context = { name: 'context' };
        circle.in(context);
        expect(circle.context).toBe(context);
        expect(circle.context.name).toBe('context');
    });
    it('.fillWith(pattern) without setting up context via in() throws up error.', function () {
        expect(function () {
            circle.fillWith('red');
        }).toThrowError('undefined is not an object (evaluating \'this.context.fillStyle = fillPattern\')');
    });
    it('.drawWith(pattern) without setting up context via in() throws up error.', function () {
        expect(function () {
            circle.drawWith({strokePattern: 'red', lineWidth: 3});
        }).toThrowError('undefined is not an object (evaluating \'this.context.strokeStyle = options.strokePattern\')');
    });
    it('.in(context).fillWith(pattern) sets up correct pattern.', function () {
        var context = { name: 'context' };
        circle.in(context).fillWith('red');
        expect(circle.context.fillStyle).toBe('red');
    });
    it('.of(radius) sets up radius property.', function () {
        circle.of(10);
        expect(circle.radius).toBe(10);
    });
    it('.fill(context, 20, \'red\', [10, 10]) sets up all properties properly', function () {
        circle.fill(context, 20, 'red', [10, 10]);
        expect(circle.radius).toBe(20);
        expect(circle.context.fillStyle).toBe('red');
        expect(circle.context).toBe(context);
        expect(circle.context.name).toBe('context');
    });
    it('.draw(context, 20, {strokePattern: \'red\', lineWidth: 3}, [10, 10]) sets up all properties properly', function () {
        circle.draw(context, 10, {strokePattern: 'red', lineWidth: 3}, [10, 10]);
        expect(circle.radius).toBe(10);
        expect(circle.context.strokeStyle).toBe('red');
        expect(circle.context.lineWidth).toBe(3);
        expect(circle.context).toBe(context);
        expect(circle.context.name).toBe('context');
    });
    describe('has context such that', function () {
        it('fill() calls all the functions in, of, fillWith, fillAt call', function () {
            spyOn(context, 'beginPath');
            spyOn(context, 'closePath');
            spyOn(context, 'arc');
            spyOn(context, 'fill');
            expect(circle.fill(context, 20, 'red', [10, 10])).toBe(circle);
            expect(context.beginPath).toHaveBeenCalled();
            expect(context.beginPath).toHaveBeenCalledTimes(1);
            expect(context.closePath).toHaveBeenCalled();
            expect(context.closePath).toHaveBeenCalledTimes(1);
            expect(context.arc).toHaveBeenCalled();
            expect(context.arc).toHaveBeenCalledTimes(1);
            expect(context.fill).toHaveBeenCalled();
            expect(context.fill).toHaveBeenCalledTimes(1);
        });
        it('fillAt() calls context.beginPath()', function () {
            spyOn(context, 'beginPath');
            circle.in(context).fillAt(10, 10);
            expect(context.beginPath).toHaveBeenCalled();
            expect(context.beginPath).toHaveBeenCalledTimes(1);
        });
        it('fillAt() calls context.closePath()', function () {
            spyOn(context, 'closePath');
            circle.in(context).fillAt(10, 10);
            expect(context.closePath).toHaveBeenCalled();
            expect(context.closePath).toHaveBeenCalledTimes(1);
        });
        it('fillAt() calls context.arc()', function () {
            spyOn(context, 'arc');
            circle.in(context).fillAt(10, 10);
            expect(context.arc).toHaveBeenCalled();
            expect(context.arc).toHaveBeenCalledTimes(1);
        });
        it('fillAt() calls context.fill()', function () {
            spyOn(context, 'fill');
            circle.in(context).fillAt(10, 10);
            expect(context.fill).toHaveBeenCalled();
            expect(context.fill).toHaveBeenCalledTimes(1);
        });
        it('draw() calls all the functions in, of, drawWith, drawAt call', function () {
            spyOn(context, 'beginPath');
            spyOn(context, 'closePath');
            spyOn(context, 'arc');
            spyOn(context, 'stroke');
            expect(circle.draw(context, 20, {strokePattern: 'red', lineWidth: 3}, [10, 10])).toBe(circle);
            expect(context.beginPath).toHaveBeenCalled();
            expect(context.beginPath).toHaveBeenCalledTimes(1);
            expect(context.closePath).toHaveBeenCalled();
            expect(context.closePath).toHaveBeenCalledTimes(1);
            expect(context.arc).toHaveBeenCalled();
            expect(context.arc).toHaveBeenCalledTimes(1);
            expect(context.stroke).toHaveBeenCalled();
            expect(context.stroke).toHaveBeenCalledTimes(1);
        });
        it('drawAt() calls context.beginPath()', function () {
            spyOn(context, 'beginPath');
            circle.in(context).drawAt(10, 10);
            expect(context.beginPath).toHaveBeenCalled();
            expect(context.beginPath).toHaveBeenCalledTimes(1);
        });
        it('drawAt() calls context.closePath()', function () {
            spyOn(context, 'closePath');
            circle.in(context).drawAt(10, 10);
            expect(context.closePath).toHaveBeenCalled();
            expect(context.closePath).toHaveBeenCalledTimes(1);
        });
        it('drawAt() calls context.arc()', function () {
            spyOn(context, 'arc');
            circle.in(context).drawAt(10, 10);
            expect(context.arc).toHaveBeenCalled();
            expect(context.arc).toHaveBeenCalledTimes(1);
        });
        it('drawAt() calls context.fill()', function () {
            spyOn(context, 'stroke');
            circle.in(context).drawAt(10, 10);
            expect(context.stroke).toHaveBeenCalled();
            expect(context.stroke).toHaveBeenCalledTimes(1);
        });
    });
    describe('has functions such that calling them returns same circle object', function () {
        it('draw(in, of, with, at) returns circle object', function () {
            expect(circle.draw(context, 20, {strokePattern: 'red', lineWidth: 3}, [10, 10])).toBe(circle);
        });
        it('drawAt(x, y) returns circle object', function () {
            expect(circle.in(context).drawAt(10, 20)).toBe(circle);
        });
        it('drawWith(pattern) returns circle object', function () {
            expect(circle.in(context).drawWith({ strokePattern: 'red', lineWidth: 3})).toBe(circle);
        });
        it('fill(in, of, with, at) returns circle object', function () {
            expect(circle.fill(context, 20, 'red', [10, 10])).toBe(circle);
        });
        it('fillAt(x, y) returns circle object', function () {
            expect(circle.in(context).fillAt(10, 20)).toBe(circle);
        });
        it('fillWith(pattern) returns circle object', function () {
            expect(circle.in(context).fillWith('red')).toBe(circle);
        });
        it('in(context) returns circle object', function () {
            expect(circle.in(context)).toBe(circle);
        });
        it('of(radius) returns circle object', function () {
            expect(circle.of(10)).toBe(circle);
        });

    });
});
