export async function fetchProducts() {
  const response = await fetch('https://wine-back-test.herokuapp.com/products?page=1&limit=10');
  const products = await response.json();
  return products.items;
} 