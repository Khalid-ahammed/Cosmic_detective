import React, { useState, useEffect } from 'react'
import { useFetch } from './custom_hook/useFetch'
import Loading from './components/Loading'

const AppContext = React.createContext()

const ContextProvider = ({ children }) => {
  const [type, setType] = useState('default')
  const [detailsSecPos, setDetailsSecPos] = useState(null)
  const { loading, data } = useFetch('/jsonData/data.json')

  if (loading) {
    return <Loading />
  }

  return (
    <AppContext.Provider
      value={{
        type,
        setType,
        setDetailsSecPos,
        detailsSecPos,
        data,
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
