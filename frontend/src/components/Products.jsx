import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Button, Pagination } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../api/request';
import { selectProduct } from '../app/slices/selections';
import './Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    fetchProducts()
      .then((data) => setProducts(data))
      .finally(() => setIsLoading(false));
  }, [])

  return (
    <>
      <Container className="cards_products">
        {isLoading && <div>Carregando...</div>}
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
                    className='button'
                    onClick={() => dispatch(selectProduct(product.id))}
                  >
                    Adicionar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Pagination className='pagination'>
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