const multiplicação = require("../index.js")

test(" a multiplicação que 2 * 3 deve ser 6", () => {
    expect(multiplicação(2, 3)).toBe(6)
})