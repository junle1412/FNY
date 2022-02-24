import React from 'react'

import { Route ,Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

const Routes = () => {
  return (
   <Switch>
     <Route path='/' exact componet={Home}/>
     <Route path='/catalog/:slug' exact componet={Product}/>
     <Route path='/catalog' exact componet={Catalog}/>
     <Route path='/cart' exact componet={Cart}/>
   </Switch>
  )
}

export default Routes