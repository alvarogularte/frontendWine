const BASE_URL = 'https://wine-back-test.herokuapp.com/products?page=1&limit=10';

export async function fetchProducts() {
  const response = await fetch(BASE_URL);
  const products = await response.json();
  return products.items;
}

export async function fetchProductById(id) {
    const response = await fetch(BASE_URL);
    const products = await response.json();
    const productsArray = products.items;
    
    console.log(products.items);
    for (let index = 0; index <= productsArray.length; index += 1) {
      if (productsArray[index].id === id) {
        console.log('logando dentro do for', productsArray[index].id);
        return productsArray[index].id;
      }
    }
  console.log('logando fora do for', products.item);
}