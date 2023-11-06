import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './Data'

import './App.css'

function App() {
  const allData = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })




  return (
    <>
      <Navbar />
      <Hero />
      <section className='card-container'>
        {allData}
      </section>
    </>
  )
}

export default App
