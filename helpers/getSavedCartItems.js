const getSavedCartItems = () => {
  // seu código aqui
  // const addLoc = document.getElementsByClassName('cart__items');
  // if (localStorage.length !== 0) {
  //   restLoc = 
  //   console.log(`local Storage dentro do IF é ${restLoc}`);
  // }
  return localStorage.getItem('cartItems');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
