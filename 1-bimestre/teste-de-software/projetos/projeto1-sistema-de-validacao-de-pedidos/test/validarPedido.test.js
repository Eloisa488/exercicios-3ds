const validarPedido = require('../validarPedido');

describe('Sistema de Validação de Pedido', () => {

  test('Pedido válido deve retornar true', () => {
    const pedido = {
      cliente: "Eloisa",
      total: 150,
      itens: ["Produto A", "Produto B"]
    };

    expect(validarPedido(pedido)).toBe(true);
  });

  test('Pedido com total 0 deve retornar false', () => {
    const pedido = {
      cliente: "Eloisa",
      total: 0,
      itens: ["Produto A"]
    };

    expect(validarPedido(pedido)).toBe(false);
  });

  test('Pedido sem cliente deve retornar false', () => {
    const pedido = {
      total: 150,
      itens: ["Produto A"]
    };

    expect(validarPedido(pedido)).toBe(false);
  });

  test('Pedido sem itens deve retornar false', () => {
    const pedido = {
      cliente: "Eloisa",
      total: 150
    };

    expect(validarPedido(pedido)).toBe(false);
  });

  test('Pedido com itens vazio deve retornar false', () => {
    const pedido = {
      cliente: "Eloisa",
      total: 150,
      itens: []
    };

    expect(validarPedido(pedido)).toBe(false);
  });

});