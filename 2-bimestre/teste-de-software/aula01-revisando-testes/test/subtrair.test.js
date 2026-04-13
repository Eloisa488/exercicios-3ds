const subtrair = require("../src/index")

describe("Função subtrair", () => {

  test("deve retornar 3 ao subtrair 2 de 5", () => {
    
    const a = 5
    const b = 2


    const resultado = subtrair(a, b)

    expect(resultado).toBe(3)
  })

  test("deve retornar 5 ao subtrair 5 de 10", () => {
    const a = 10
    const b = 5
    const resultado = subtrair(a, b)
    expect(resultado).toBe(5)
  })

})