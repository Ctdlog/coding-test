/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];

    for (const asteroid of asteroids) {
        let collide = false;

        while (stack.length > 0 && stack[stack.length - 1] > 0 && asteroid < 0) {
            const prevAsteroid = stack.pop();
            if (prevAsteroid === -asteroid) {
                collide = true; 
                break;
            } else if (prevAsteroid > -asteroid) {
                stack.push(prevAsteroid); 
                collide = true;
                break;
            }
        }

        if (!collide) {
            stack.push(asteroid); 
        }
    }

    return stack;
};