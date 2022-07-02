import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
        <Navbar.Brand href="/home">Wine</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/clube" data-testid='clube'>Clube</Nav.Link>
            <Nav.Link href="/loja">Loja</Nav.Link>
            <Nav.Link href="/produtores">Produtores</Nav.Link>
            <Nav.Link href="/ofertas">Ofertas</Nav.Link>
            <Nav.Link href="/eventos">Eventos</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/pesquisar">Pesquisar</Nav.Link>
            <Nav.Link eventKey={2} href="/conta">
              Minha conta
            </Nav.Link>
            <Nav.Link href="/pesquisar">Logo Wine</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header