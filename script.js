const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const itemSection = document.querySelector('.items');

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  itemSection.appendChild(section);

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui

};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const clicado = async (evento) => {
  const childFirst = (evento.target).parentNode;
  const idComprado = (childFirst.firstChild).textContent;
  const prodCar = await fetchItem(idComprado);

  const olCar = document.body.querySelector('.cart__items');
  olCar.appendChild(createCartItemElement(prodCar));
};

function captButt() {
  const btnAddCar = document.querySelectorAll('.item__add');
  btnAddCar.forEach((elem) => {
    elem.addEventListener('click', clicado);
  });
}
const adicProdutos = async () => {
  const prodObjeto = await fetchProducts('computador');
  const sku = prodObjeto.results.map((elem) => {
    const produto = {
      sku: elem.id,
      name: elem.title,
      image: elem.thumbnail,
    };
    return produto;
  });
  sku.forEach((productIn) => {
    createProductItemElement(productIn);
  });
  captButt();
};

adicProdutos();
window.onload = () => { };
