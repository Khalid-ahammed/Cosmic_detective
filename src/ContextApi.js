import React, { useState, useEffect } from 'react'

const AppContext = React.createContext()

const ContextProvider = ({ children }) => {
  const [type, setType] = useState('default')
  const [detailsSecPos, setDetailsSecPos] = useState(null)

  return (
    <AppContext.Provider
      value={{
        type,
        setType,
        setDetailsSecPos,
        detailsSecPos,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const ContextConsumer = () => {
  return React.useContext(AppContext)
}

export { ContextProvider, ContextConsumer }
