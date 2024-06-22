import { useState, useContext, createContext } from 'react'

const Context = createContext()

export function AppProvider ({ children }) {
  const [state, setState] = useState({
    activeButtonId: ''
  })

  const _setState = newState => {
    setState(state => ({
      ...state,
      ...newState
    }))
  }

  const value = {
    state,
    setState: _setState
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export function AppContext () {
  return useContext(Context)
}
