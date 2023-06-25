import React, { children } from 'react'

const contents = ({children}) => {
  return (
    <main id="main" role="main">
        {children}
    </main>
  )
}

export default contents
