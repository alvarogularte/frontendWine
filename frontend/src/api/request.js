const BASE_URL = 'https://wine-back-test.herokuapp.com/products?page=1&limit=10';

export async function fetchProducts() {
  const response = await fetch(BASE_URL);
  const products = await response.json();
  return products.items;
}

export async function fetchProductById(id) {
    const response = await fetch(BASE_URL);
    const products = await response.json();

    for (let index = 0; index <= products.length; index += 1) {
      if (products.item.id[index] === id) {
        console.log('logando dentro do for', products.item[index]);
        return products.item[index];
      }
    }
  console.log('logando fora do for', products.item);
}