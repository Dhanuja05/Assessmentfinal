import React from 'react'
import Category from './Best/Category'
import Feature from './Feature/Feature'
import Group from './Group/Group'
import Home from './Home/Home'
import Latest from './Latest/Latest'
import Load from './Loadmore/Load'
import Navbar from './Navbar/Navbar'
import Navbar1 from './Navbar1/Navbar1'
import Rectangle from './Rectangle/Rectangle'
import Search from './Search/Search'
import Seller from './Seller/Seller'
import Shoe from './Shoe/Shoe'

function App() {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Navbar1/>
      <Home/>
      <Shoe/>
      <br/><br/>
      <Category/>
      <br/><br/>
      <Seller/>
      <br/>
      <Load/>
      <br/>
      <br/>
      <br/>
      <Group/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Latest/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Feature/>
      <br/>
      <br/>
      <Search/>
      <br/><br/><br/><br/>
      <Rectangle/>
      
    </div>
  )
}

export default App
