import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { fetchProducts } from '../api/request';

function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => console.log(data));
  }, [])

  return (
    <div>
      <Header />
    </div>
  )
}

export default Product