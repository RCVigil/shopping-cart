const fetchItem = async (itemID) => {
  // seu código aqui
  try {
    const ENDPOINT = (`https://api.mercadolibre.com/items/${itemID}`);

    const response = await fetch(ENDPOINT);
    const data = await response.json();
    return data;
  } catch (error) {
    return ('O erro do FETCHITEM é = ', error);
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
