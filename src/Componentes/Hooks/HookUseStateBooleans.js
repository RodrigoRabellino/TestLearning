import React, { useState } from 'react'

const Header = () => {
    const subtitleStyles = {
      fontWeight: 'bold'
    }
  
    const headerStyles  = {
      margin: '0.6em',
      borderRadius: '0.3em',
      border: '1px solid #d2d2d2',
      padding: '2em 0.4em',
      fontFamily: 'monospace',
      fontSize: '25px',
      textAlign: 'center', 
      background: 'skyblue'
    }
  
    return (
      <header style={headerStyles}>
        
        <div style={subtitleStyles}>
          Hook useState Boolean
          <span role='img' aria-label='flame' >
            🔥
          </span>
        </div>
      </header>
    )
  }
  
  

const App = () => {
    const [isActive, setActive] = useState(false)

    const toggle = () => {
        setActive(!isActive)
    }

  return(
    <div>
        {isActive && <Header/>}
        <button onClick= {toggle}>
            { isActive ? 'Desactivar' : 'Activar' }
        </button>

    </div>
  )
}

export default App