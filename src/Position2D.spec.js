/* global describe it */

const expect = require('chai').expect
const Position2D = require('./Position2D')

describe('Position2D', () => {
    it('is a class', () => {
        const expected = 'function'
        const actual = typeof Position2D
        expect(actual).to.equal(expected)
    })

    it('object has default x and y values of 0', () => {
        const pos = new Position2D()
        const expected = 0
        expect(pos.x).to.equal(expected)
        expect(pos.y).to.equal(expected)
    })

    it('object has method "toArray()" that returns [x, y]', () => {
        const pos = new Position2D()
        const expectedArray = [0, 0]
        const expectedType = 'function'
        expect(typeof pos.toArray).to.equal(expectedType)
        expect(pos.toArray()).to.deep.equal(expectedArray)
    })

    it('object has method "toArray()" that returns [x, y] when passed explicit values to constructor', () => {
        const pos = new Position2D(10, 20)
        const expectedArray = [10, 20]
        const expectedType = 'function'
        expect(typeof pos.toArray).to.equal(expectedType)
        expect(pos.toArray()).to.deep.equal(expectedArray)
    })
})
