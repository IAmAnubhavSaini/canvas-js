const Square = require('./Square');
const Point2d = require('./Point2d');

describe('Square', () => {
    it('the default side value is 1', () => {
        const expected = 1;
        const actual = new Square().side;
        expect(actual).toEqual(expected);
    });
    it('it returns correct side value for a given constructor value', () => {
        const expected = 14;
        const actual = new Square(14).side;
        expect(actual).toEqual(expected);
    });
    describe('context', () => {
        it('gets assigned properly', () => {
            const expected = 'function';
            const actual = typeof (new Square().in(() => {
            })).context;
            expect(actual).toEqual(expected);

        });
        it('pass a fillRect function', () => {
            const expected = 'function';
            const actual = typeof (new Square().in({
                fillRect: () => {
                }
            })).context.fillRect;
            expect(actual).toEqual(expected);
        });
        it('fillRect function gets called with 0, 0, 10, 10', (done) => {
            function fillRect(x, y, sideA, sideB) {
                expect(x).toEqual(0);
                expect(y).toEqual(0);
                expect(sideA).toEqual(sideB);
                expect(sideA).toEqual(10);
                done();
            }

            const context = {
                fillRect
            };
            const origin = new Point2d();
            const sq = new Square(10);
            sq.in(context).drawAt(origin); // must fire context.fillRect
        });
        it('fillRect function gets called with -10, 10, 14, 14', (done) => {
            function fillRect(x, y, sideA, sideB) {
                expect(x).toEqual(-10);
                expect(y).toEqual(10);
                expect(sideA).toEqual(sideB);
                expect(sideA).toEqual(14);
                done();
            }

            const context = {
                fillRect
            };
            const origin = new Point2d(-10, 10);
            const sq = new Square(14);
            sq.in(context).drawAt(origin); // must fire context.fillRect
        });
    });
});
