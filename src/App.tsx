import { useState, useEffect } from 'react'
import { BeerContainer } from './Components/BeerContainer/BeerContainer'
import { Beer } from './Components/Types/Types'
import './App.scss'
import { BeerCard } from './Components/BeerCard/BeerCard'

function App() {

  return (
    <>
      <h1>Beers on us!</h1>
      <BeerContainer />
    </>
  )
}

export default App
