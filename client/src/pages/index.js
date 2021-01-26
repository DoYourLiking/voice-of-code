import React from 'react'

const Home = React.lazy(() => import('./Home/Home'))

const Landing = React.lazy(() => import('./Landing/Landing'))


export {
  Home,
  Landing
}