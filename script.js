const olCar = document.querySelector('.cart__items');
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
  // FUNÇÃO QUE COLOCA OS PRODUTOS DINAMICAMENTE NO SITE PARA O CLIENTE COMPRAR
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

const arred = (sum) => Math.round(((sum)) * 100) / 100; 

const sumCar = () => {
  // FUNÇÃO PARA SOMAR O TOTAL DA COMPRA
  const purchaseElem = document.querySelectorAll('.cart__item');
  const totEspaco = document.querySelector('.total-price');
  let totalSum = 0;
  purchaseElem.forEach((elem) => {
    const elemComp = parseFloat(elem.innerText.split('$')[1]);
    totalSum += elemComp;
    arred(totalSum);
  });
  totEspaco.innerText = (`To pay $ ${totalSum.toFixed(2)}`);

  return totalSum;
};

const cartItemClickListener = (event) => {
  // FUNÇÃO QUE REMOVE DO CARRINHO DE COMPRA, UNITARIAMENTE.
  event.target.remove();
  sumCar();
  saveCartItems(olCar.innerHTML);
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  // FUNÇÃO QUE CRIA OS ELEMENTOS QUE FORAM COMPRADOS, ADICIONA NO CARRINHO
  getSavedCartItems();
  const li = document.createElement('li');
  li.className = 'cart__item linhaItem';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const clicado = async (evento) => {
  // FUNÇÃO COMPLEMENTAR PARA DAR AÇÃO AO EVENTO CLICAR
  const childFirst = (evento.target).parentNode;
  const idComprado = (childFirst.firstChild).textContent;
  const prodCar = await fetchItem(idComprado);
  
  olCar.appendChild(createCartItemElement(prodCar));
  sumCar();
  saveCartItems(olCar.innerHTML);
};

function captButt() {
  // FUNÇÃO COMPLEMENTAR PARA ADICIONAR O EVENTO, CHAMANDO A FUNÇÃO CLICADO
  const btnAddCar = document.querySelectorAll('.item__add');
  btnAddCar.forEach((elem) => {
    elem.addEventListener('click', clicado);
  });
}

function carInic() {
  // FUNÇÃO PARA ADICIONAR CARREGANDO EXERC.11
  const inicCarreg = document.querySelector('.items');
  const tagCarregando = document.createElement('p');
  tagCarregando.className = 'loading';
  tagCarregando.innerText = 'carregando...';
  inicCarreg.appendChild(tagCarregando);
  return tagCarregando;
}

function carEnd() {
  // FUNÇÃO PARA REMOVER O CARREGANDO EXERC.11
  const tagEndCarreg = document.querySelector('.items').firstChild.remove();
  return tagEndCarreg;
}

const adicProdutos = async () => {
  // FUNÇÃO DE ADICIONAR PRODUTO DA FETCH (ENDPOINT)
  carInic();
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
  carEnd();
  captButt();
};

async function clearCart() {
  // BOTÃO ESVAZIAR CARRINHO
  const carClearV = document.querySelector('.empty-cart');
  carClearV.addEventListener('click', () => {
    document.querySelectorAll('.cart__item').forEach((e) => e.remove());
    sumCar();
    localStorage.removeItem('cartItems');
  });
}

function getLocalSaved() {
  // cartItemClickListener();
  olCar.innerHTML = getSavedCartItems();

  olCar.childNodes.forEach((elem) => {
    elem.addEventListener('click', cartItemClickListener);
  });
  sumCar();
}

window.onload = () => {
  clearCart();
  adicProdutos();
  getLocalSaved();
};
