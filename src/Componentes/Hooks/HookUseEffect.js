import React, { useEffect, useState } from 'react'
//esto es pa ver si se actualiza en git 
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
    fontSize: '17px',
    textAlign: 'center'
  }

  return (
    <header style={headerStyles}>
      
      <div style={subtitleStyles}>
        Hook useEffect
        <span role='img' aria-label='flame' >
          🔥
        </span>
      </div>
    </header>
  )
}



const App = () => {
    
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)

    const handleMove=(e)=>{
        setMouseX(e.clientX)
        setMouseY(e.clientY)
    }

    useEffect(() => {
        //componentDidMount
        //componentDidUpdate
        window.addEventListener('mousemove', handleMove)


        return() => {
            //ComponentWillUnmount
            window.removeEventListener('mousemove', handleMove)
        }
    })

    



    return(
        <div>
        <Header/>
        <h1>
            X: {mouseX} - Y: {mouseY}
        </h1>
        
        </div>
    )
}

export default App