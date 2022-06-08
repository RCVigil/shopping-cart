require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {

  it('Teste se fetchProducts é uma função', async () => {
        
    expect.assertions(1);
    
    const response = await (typeof fetchProducts === 'function');

    const expected = (true);

    expect(response).toEqual(expected)
  });

  it('Execute a função fetchProducts com o argumento computador e teste se fetch foi chamada', async () => {

    expect.assertions(1);

    await fetchProducts('computador');

    expect(fetch).toHaveBeenCalled()
  });

  it('Teste se, ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint https://api.mercadolibre.com/sites/MLB/search?q=computador', async () => {
        
    expect.assertions(1);

    await fetchProducts('computador');
    
    const response = fetch;

    const expected = ('https://api.mercadolibre.com/sites/MLB/search?q=computador');

    expect(response).toHaveBeenCalledWith(expected)
  });

  it('Teste se o retorno da função fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
        
    expect.assertions(1);
    
    const response = (await fetchProducts('computador'));

    const expected = (computadorSearch);

    expect(response).toEqual(expected);
  });

  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
        
    expect.assertions(1);
    
    const response = (await fetchProducts());

    const expected = new Error('You must provide an url');

    expect(response).toEqual(expected);
  });
});
