require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {

  it('1 - Teste se fetchItem é uma função', async () => {

    const response = await (typeof fetchItem === 'function');

    const expected = (true);

    expect(response).toEqual(expected)
  });

  it('2 - Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada', async () => {

    return await fetchItem('MLB1615760527');

    expect(fetch).toHaveBeenCalled()
  });

  it('3 - Teste se, ao chamar a função fetchItem com o argumento do item MLB1615760527, a função fetch utiliza o endpoint https://api.mercadolibre.com/items/MLB1615760527', async () => {

    return await fetchItem('MLB1615760527');

    const response = fetch;

    const expected = ('https://api.mercadolibre.com/items/MLB1615760527');

    expect(response).toHaveBeenCalledWith(expected);
  });

  it('4 - Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {

    return await fetchItem('MLB1615760527');

    const expected = (computadorSearch);

    expect().toEqual(expected);
  });

  it('5 - Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {

    return await fetchItem()

    const expected = (new Error('You must provide an url'));

    expect().toEqual(expected);
  });

});
