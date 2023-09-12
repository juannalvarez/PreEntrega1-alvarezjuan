import { useState } from 'react'
import './style.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar'

function Intrepida() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a INTRÉPIDA Vinoteca"/> 
      <div className="container"> 
      <div className="row">
        {}
      </div>
      </div>
    </>
  )
}

export default Intrepida
