import React from 'react'
import Header from '../components/Header';
import Search from '../components/Search';
import Products from '../components/Products';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <>
      <Header />
      <Container>
      <Row>
        <Col sm={3}><Search /></Col>
        <Col sm={9}><Products /></Col>
      </Row>
    </Container>
    </>
  )
}

export default Home