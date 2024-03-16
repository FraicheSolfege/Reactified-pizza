import React from 'react'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import Footer from './components/footer/Footer'
import Pizza from './components/pizza/Pizza'

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Pizza />
      <Footer />
    </div>
  )
}

export default App