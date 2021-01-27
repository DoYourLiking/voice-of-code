import React from 'react'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import { Home, Landing } from '../pages'

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Route path='/home' exact>
        <Home />
      </Route>
      <Route path='/' exact>
        <Landing />
      </Route>
    </BrowserRouter>
  )
}

export default MainRouter