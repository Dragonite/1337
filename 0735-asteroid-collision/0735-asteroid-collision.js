/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const result = [];
    asteroids.forEach(asteroid => {
        let destroyed = false;
         
        // This will collide
        while (result[result.length - 1] > 0 && asteroid < 0) {
            const lastAsteroid = result[result.length - 1];
            // If the asteroid is bigger than the last asteroid, the last asteroid gets destroyed.
            if (Math.abs(asteroid) > Math.abs(lastAsteroid)) {
                result.pop();
                // Continue here because we need to keep destroying asteroids until we can't anymore.
                continue;
            } else if (Math.abs(asteroid) === Math.abs(lastAsteroid)) {
                result.pop();
                destroyed = true;
                // We can terminate the loop early if our asteroid dies.
                break;
            } else {
                destroyed = true;
                // We can terminate the loop early if our asteroid dies.
                break;
            }
        }
        if (!destroyed) {
            result.push(asteroid);
        }
    })
    return result;
};