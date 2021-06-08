# canvas-js

Library for easy HTML5 canvas development.

- [GitHub](https://github.com/IAmAnubhavSaini/canvas-js)
- [NPM](https://www.npmjs.com/package/canvas-js)

## APIs

- Point2d, Point2dI (interface)
- Circle, CircleI
- Square, SquareI

### Circle

[jsfiddle](https://jsfiddle.net/jshacker/Lu3up6j0/) [older API](https://jsfiddle.net/jshacker/m218j45r/)

```javascript

var circle = new Circle();

// context is 2D context of the canvas element of interest.
// pattern is fillStyle
// radius is a number
// at finally fills the circle at x, y co-ordinates.

circle.in(context).fillWith(pattern).of(radius).fillAt(x, y);

/* --- */

// context is 2D context of the canvas element of interest.
// pattern is {strokePattern: pattern|gradient|color, lineWidth: number}
// radius is a number
// at finally draws the circle (outline/perimeter) at x, y co-ordinates.

var options = { strokePattern: 'red', lineWidth: 3 };
circle.in(context).drawWith(options).of(radius).drawAt(x, y);

```

#### NodeJS example

```javascript

var canvas = require('./src/canvas-js-lib')

canvas
// { Circle: [Function: Circle] }

var c = new canvas.Circle()

c
// { startAngle: 0,
//   endAngle: 6.283185307179586,
//   antiClockwise: false }

c.in('context')
// { startAngle: 0,
//   endAngle: 6.283185307179586,
//   antiClockwise: false,
//   context: 'context' }
// >

```

#### Because chaining is awesome.

`in`, `*With`, `of` and `*At` return the circle object, thus chaining is possible.

## Including in project

```bash

npm i canvas-js

bower install canvas-js

```

## License

MIT 

- &copy; 2016-2021 Anubhav
