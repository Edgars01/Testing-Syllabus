# Mars Rover

Develop an API that moves a rover around a grid on Mars.

- You are given the initial starting point(x,y) of a rover and the direction (N,S,E,W) it is facing.
- The rover receives a string of commands:
  - Implement commands that:
    - Move the rover forward(f)
    - Move the rover backward(b)
    - Turn the rover left(l)
    - Turn the rover right(r)
- Implement wrapping from one edge or the grid to another ( Planets are spheres after all )

### Hint

Your constructor should look like: `MarsRover(location, direction, grid)`
E.g

```javascript
var rover = new MarsRover([0,0],’e’,[50,50]);
```

### Example

The rover is on a 100x100 grid at location (0, 0) and facing SOUTH. The rover is given the commands "fflff" and should end up at (2,2).

### Bonus

Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle the rover moves up to the last possible point and reports the obstacle. You will need to amend your code to take in an array of obstacles.
