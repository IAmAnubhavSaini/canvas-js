# Using Square

## Examples

### #1

```typescript

import {Square} from 'canvas-js'

const canvas = document.querySelector('canvas#canvas')
const context = canvas.getContext('2d')
const square = new Square(context, 10)

/* Draw a square
 * of side 10
 * at {10, 20} point
 */
square.drawAt(new Point2d(10, 20))
    
```
