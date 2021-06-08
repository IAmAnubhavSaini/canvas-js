const Point2d = require('./Point2d').Point2d;

describe('Point2d', () => {
    it('has x and y that can be set via constructor', () => {
        const x = 10;
        const y = 10;
        const expected = `{10, 10}`;
        const actual = new Point2d(x, y).toString();
        expect(actual).toEqual(expected);
    });
    it('has has default values of 0, 0', () => {
        const expected = `{0, 0}`;
        const actual = new Point2d().toString();
        expect(actual).toEqual(expected);
    });
    it('translate by 10 on default point returns point with 0, 0', () => {
        const expected = `{0, 0}`;
        const actual = new Point2d().translate(10).toString();
        expect(actual).toEqual(expected);
    });
    it('translate a point 1, 1 with scalar 10 returns point 10, 10', () => {
        const expected = `{10, 10}`;
        const actual = new Point2d(1, 1).translate(10).toString();
        expect(actual).toEqual(expected);
    });
    it('distanceFrom calculates correct distance from default point', () => {
        const expected = Math.sqrt(200);
        const actual = new Point2d().distanceFrom(new Point2d(10, 10));
        expect(actual).toEqual(expected);
    });
    it('distanceFrom calculates correct distance of 0 between two default points', () => {
        const expected = Math.sqrt(0);
        const actual = new Point2d().distanceFrom(new Point2d());
        expect(actual).toEqual(expected);
    });
    it('flip() returns same point when flipping a default point', () => {
        const expected = `{0, 0}`;
        const actual = new Point2d().flip().toString();
        expect(actual).toEqual(expected);
    });
    it('flip() returns 2, 1 correctly when flipping 1, 2', () => {
        const expected = `{2, 1}`;
        const actual = new Point2d(1, 2).flip().toString();
        expect(actual).toEqual(expected);
    });
});
