import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

describe('Testa o componente Header', () => {

  it('Testa se a logo da Wine é renderizada', () => {
    const logo = screen.getByAltText('logo-wine')
    
    expect(logo).toBeInTheDocument();    
  })

  it('Testa se os links na nav Header são renderizados', () => {
    render(<Header />);
    
    const clube = screen.getByText('Clube');
    const loja = screen.getByText('Loja');
    const produtores = screen.getByText('Produtores');
    const ofertas = screen.getByText('Ofertas');
    const eventos = screen.getByText('Eventos');
    const pesquisar = screen.getByText('Pesquisar');
    const minhaConta = screen.getByText('Minha conta');
    expect(clube).toBeInTheDocument();
    expect(loja).toBeInTheDocument();
    expect(produtores).toBeInTheDocument();
    expect(ofertas).toBeInTheDocument();
    expect(eventos).toBeInTheDocument();
    expect(pesquisar).toBeInTheDocument();
    expect(minhaConta).toBeInTheDocument();

  })
})
