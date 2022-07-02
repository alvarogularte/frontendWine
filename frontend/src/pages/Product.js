import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Card, Button } from 'react-bootstrap';
import { fetchProducts } from '../api/request';
import { useSelector } from 'react-redux';

function Product() {
  const [product, setProduct] = useState([]);
  const selectedProduct = useSelector((state) => state.selections.selectedProduct);

  console.log(selectedProduct);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProduct(data));
  }, [selectedProduct])

  return (
    <div>
      <Header />
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ product.image } />
        <Card.Body>
          <Card.Title>{ product.name }</Card.Title>
          <Card.Text>
            { product.sommelierComment }
          </Card.Text>
          <Button variant="primary">Adicionar</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product