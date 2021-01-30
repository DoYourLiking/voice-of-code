import React from 'react'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import { Home, Landing } from '../pages'

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Route path='/Landing' exact>
        <Landing />
      </Route>
      <Route path='/' exact>
        <Home />
      </Route>
    </BrowserRouter>
  )
}

export default MainRouter