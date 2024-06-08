// main.test.js
const holaMundo = require('./main');

test('devuelve "Hola Mundo"', () => {
    expect(holaMundo()).toBe("Hola Mundo");
});