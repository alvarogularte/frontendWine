import React from 'react';
import Header from '../components/Header';
import ProductDetails from '../components/ProductDetails';

function Product() {
  return (
    <div>
      <Header />
      <main>
        <ProductDetails href='/product' />
      </main>
    </div>
  )
}

export default Product