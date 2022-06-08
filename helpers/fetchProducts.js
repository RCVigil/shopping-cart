const fetchProducts = async () => {
  // seu código aqui
  const ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

  const response = await fetch(ENDPOINT);
  const data = await response.json();

  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
