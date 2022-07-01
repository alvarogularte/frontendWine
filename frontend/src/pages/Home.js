import React from 'react'
import Header from '../components/Header';
import Search from '../components/Search';
import Products from '../components/Products';

function Home() {
  return (
    <div>
      <Header />
      <Search />
      <Products />
    </div>
  )
}

export default Home