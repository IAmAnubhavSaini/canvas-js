/* global describe it */

const expect = require('chai').expect
const Position3D = require('./Position3D')

describe('Position3D', () => {
    it('is a class', () => {
        const expected = 'function'
        const actual = typeof Position3D
        expect(actual).to.equal(expected)
    })

    it('object has default x, y and z values of 0', () => {
        const pos = new Position3D()
        const expected = 0
        expect(pos.x).to.equal(expected)
        expect(pos.y).to.equal(expected)
        expect(pos.z).to.equal(expected)
    })

    it('object has method "toArray()" that returns [x, y, z]', () => {
        const pos = new Position3D()
        const expectedArray = [0, 0, 0]
        const expectedType = 'function'
        expect(typeof pos.toArray).to.equal(expectedType)
        expect(pos.toArray()).to.deep.equal(expectedArray)
    })

    it('object has method "toArray()" that returns [x, y, z] when passed explicit values to constructor', () => {
        const pos = new Position3D(10, 20, 30)
        const expectedArray = [10, 20, 30]
        const expectedType = 'function'
        expect(typeof pos.toArray).to.equal(expectedType)
        expect(pos.toArray()).to.deep.equal(expectedArray)
    })
})
