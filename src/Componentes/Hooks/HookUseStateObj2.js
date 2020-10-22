import React, { useState} from 'react'

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
        Hook UseState 
        <span role='img' aria-label='flame' >
          🔥
        </span>
      </div>
    </header>
  )
}



const App = () => {
    const [clicks, setClick] = useState(0)
    const [title, setTitle] = useState('')
    
    const addClick= () => {
        setClick(clicks+1)
    }
    const handleInputs = (e) =>{
        setTitle(e.target.value)
    }

    return(
        <div>
            <Header/>
            <input 
                type="text"
                value={title}
                onChange= {handleInputs}
            ></input>
            <button onClick={addClick}>
                clicks ({clicks})
            </button>
            <h3>{title}</h3>
        </div>
    )
}


export default App