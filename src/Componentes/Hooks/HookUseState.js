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
        Hook useState
        <span role='img' aria-label='flame' >
          🔥
        </span>
      </div>
    </header>
  )
}

const boxStyles = {
  padding: '0.5em',
  margin: ' 0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'

}



const App = () => {
  
  const [clicks, setClick] = useState(0)
  
  const addClick = () =>{
    setClick(clicks+1)
  }

  return(
    <div style={boxStyles}>
        <Header/>
        <button onClick = {addClick}>
          Clicks({clicks})
        </button>
      </div>
  )
}


/* class App extends Component {
  state={
    clicks:0
  }

  addClick = () => {
    this.setState({
      clicks : this.state.clicks +1 
    })
  }

  render () {
    const {clicks } = this.state
    return (
      
    )
  }
} */

export default App