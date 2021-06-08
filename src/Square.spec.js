const Square = require('./Square').Square;
const Point2d = require('./Point2d').Point2d;

describe('Square', () => {
    let fillRect;
    let context;
    beforeEach(() => {
        fillRect = (x, y, a, b) => [x, y, a, b];
        context = {fillRect};
    });
    afterEach(() => {
        fillRect = null;
        context = null;
    });
    it('the default side value is 1', () => {
        const expected = 1;
        const actual = new Square(context).side;
        expect(actual).toEqual(expected);
    });
    it('it returns correct side value for a given constructor value', () => {
        const expected = 14;
        const actual = new Square(context, 14).side;
        expect(actual).toEqual(expected);
    });
    describe('context', () => {
        it('fillRect function gets called with 0, 0, 10, 10', (done) => {
            const context = {
                fillRect(x, y, sideA, sideB) {
                    expect(x).toEqual(0);
                    expect(y).toEqual(0);
                    expect(sideA).toEqual(sideB);
                    expect(sideA).toEqual(10);
                    done();
                }
            };
            const origin = new Point2d();
            const sq = new Square(context, 10);
            sq.drawAt(origin); // must fire context.fillRect
        });
        it('fillRect function gets called with -10, 10, 14, 14', (done) => {
            const context = {
                fillRect(x, y, sideA, sideB) {
                    expect(x).toEqual(-10);
                    expect(y).toEqual(10);
                    expect(sideA).toEqual(sideB);
                    expect(sideA).toEqual(14);
                    done();
                }
            };
            const origin = new Point2d(-10, 10);
            const sq = new Square(context, 14);
            sq.drawAt(origin); // must fire context.fillRect
        });
    });
});
