import React from 'react'
import './App.css'
import Main from './pages/Main'
import TopBar from './components/TopBar/TopBar'

const App = () => {
  return (
    <div>
      <TopBar/>
      <Main/>
    </div>
  )
}

export default App