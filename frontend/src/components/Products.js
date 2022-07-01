import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Button, Pagination } from 'react-bootstrap';
import { fetchProducts } from '../api/request';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data));
  }, [])

  return (
    <>
      <Container className="cards__products">
        <Row className="justify-content-sm-center">
          {products && products.map((product) => (
            <Col key={ product.id } sm="10" md="8" lg="6" xl="4">
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
                    { `R$ ${product.price.toString().replace(/\./, ',')}` } { `${product.discount}% off`}
                  </Card.Subtitle>
                  <Card.Subtitle
                    className='subtitle'
                  >
                    { `sócio wine R$ ${product.priceMember}` }
                  </Card.Subtitle>
                  <Card.Subtitle
                    className='subtitle'
                  >
                    { `não sócio R$ ${product.priceNonMember}` }
                  </Card.Subtitle>
                  <Button
                  >
                    Adicionar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Pagination>
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Next>Próximo</Pagination.Next>
        <Pagination.Last />
      </Pagination>
    </>
  )
}

export default Products