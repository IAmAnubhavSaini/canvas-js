const Rectangle = require('./Rectangle').Rectangle;
const Point2d = require('./Point2d').Point2d;

describe('Rectangle', () => {
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
    it('the default sideShort, sideLong values are 1, 2', () => {
        const {sideShort, sideLong} = new Rectangle(context);
        expect(sideShort).toEqual(1);
        expect(sideLong).toEqual(2);
    });
    it('it returns correct sideShort value for a given constructor value', () => {
        const expected = 14;
        const actual = new Rectangle(context, 14).sideShort;
        expect(actual).toEqual(expected);
    });
    describe('context', () => {
        it('fillRect function gets called with 0, 0, 10, 2', (done) => {
            const context = {
                fillRect(x, y, sideShort, sideLong) {
                    expect(x).toEqual(0);
                    expect(y).toEqual(0);
                    expect(sideShort).toEqual(10);
                    expect(sideLong).toEqual(2);
                    done();
                }
            };
            const origin = new Point2d();
            const rect = new Rectangle(context, 10);
            rect.drawAt(origin); // must fire context.fillRect
        });
        it('fillRect function gets called with -10, 10, 14, 14', (done) => {
            const context = {
                fillRect(x, y, sideShort, sideLong) {
                    expect(x).toEqual(-10);
                    expect(y).toEqual(10);
                    expect(sideShort).toEqual(2);
                    expect(sideLong).toEqual(14);
                    done();
                }
            };
            const origin = new Point2d(-10, 10);
            const sq = new Rectangle(context, 2, 14);
            sq.drawAt(origin); // must fire context.fillRect
        });
    });
});
