# Using Circle

```typescript

import {Circle} from 'canvas-js'

const canvas = document.querySelector('canvas#canvas')
const context = canvas.getContext('2d')
const radius = 10
const circle = new Circle(context, radius)

/* Draw a circle
 * of radius 10
 * at {10, 20} point
 * blue in color (lines, not fill pattern)
 */
circle.drawWith({strokePattern: 'blue', lineWidth: 2}).drawAt(new Point2d(10, 20))
    
```
