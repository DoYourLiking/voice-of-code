import React, { Suspense } from 'react'
import MainRouter from './router'

const App = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <MainRouter />
      </Suspense>
    </div>
  )
}

export default App