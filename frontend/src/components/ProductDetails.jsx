import React, { useEffect, useState } from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { fetchProducts } from '../api/request';
import { useSelector } from 'react-redux';


function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const selectedProduct = useSelector((state) => state.selections.selectedProduct);

  useEffect(() => {
    setIsLoading(true);
    fetchProducts()
      .then((data) => setProduct(data));
  }, [selectedProduct])

  return (
    <Container className="cards_products">
      <Card style={{ width: '18rem' }}>
        { isLoading && <div>Carregando...</div> }
          <Card.Img variant="top" src={ product.image } />
          <Card.Body>
            <Card.Title>{ product.name }</Card.Title>
            <Card.Text>
              { product.sommelierComment }
            </Card.Text>
            <Button variant="primary">Adicionar</Button>
          </Card.Body>
        </Card>
      </Container>
  )
}

export default ProductDetails