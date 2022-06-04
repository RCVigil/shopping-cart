require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Teste se fetchProducts é uma função', async () => {

    const response = await (typeof fetchProducts === 'function');

    const expected = (true);

    expect(response).toEqual(expected)
  });

  it('Execute a função fetchProducts com o argumento computador e teste se fetch foi chamada', async () => {

    const response = await fetchProducts('computador');

    const expected = ( 'https://api.mercadolibre.com/sites/MLB/search?q=computador' );

    expect(response).toEqual(expected)
  });
});
