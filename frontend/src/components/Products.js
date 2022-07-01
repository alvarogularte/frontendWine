import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { fetchProducts } from '../api/request';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data));
  }, [])

  return (
    <Container className="cards__products">
      <Row className="justify-content-sm-center">
        {products && products.map((product) => (
          <Col key={ product.id } sm="6" md="4" lg="3" xl="2">
            <Card>
              <section className="card_image">
                <Card.Img
                  variant="top"
                  src={ product.image }
                  style={ { maxWidth: '163px',
                    maxHeight: '163px' } }
                />
              </section>
              <Card.Body>
                <Card.Title
                >
                  {product.name}

                </Card.Title>
                <Card.Subtitle
                  className='subtitle'
                >
                  { product.price.toString().replace(/\./, ',') } { `${product.discount}% off`}
                </Card.Subtitle>
                <Card.Subtitle
                  className='subtitle'
                >
                  { `sócio wine ${product.priceMember}` }
                </Card.Subtitle>
                <Button
                >
                  -
                </Button>
              </Card.Body>
            </Card>
          </Col>

        ))}
      </Row>
      <Button
        type="button"
        className="btn btn-primary"
        variant=""
        size="lg"
      >
        R$
        {' '}
        <span data-testid="customer_products__checkout-bottom-value">
        </span>
      </Button>
    </Container>
  )
}

export default Products