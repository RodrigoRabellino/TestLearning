import React, {Component} from 'react'

const boxStyles = {
    padding: '0.5em',
    margin: ' 0.5em',
    border: '1px solid gray',
    borderRadius: '0.3em',
    textAlign: 'center'
  }
  
  const blueStyles = {
    ...boxStyles,
    border: '1px solid blue',
  }
  
  const redStyles = {
    ...boxStyles,
    border: '1px solid red',
  }

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
        <div>
          ( Cualquiera )
        </div>
        <div style={subtitleStyles}>
          React Api Context
          <span role='img' aria-label='flame' >
            🔥
          </span>
        </div>
      </header>
    )
  }


const {Provider, Consumer} = React.createContext()

class Hijo extends Component{
    render (){
        return(
            <div style={blueStyles}> 
                <p>Hijo</p>
                <Nieto/>
            </div>
        )
    }
}
const Nieto = () =>(
    <Consumer>
                {({clicks, addClicks}) =>(
                    <div style={redStyles}> 
                    <p>Nieto</p>
                    
                    <button onClick={addClicks}>
                        Disparar ({clicks})
                    </button>
                    </div>
                    )
                }
            </Consumer>
)

class App extends Component{
    state ={
        clicks:0,
    }

    addClicks = () => {
        this.setState(state=> ({
                clicks: state.clicks + 1
            }))
    }

    render(){
        return(
            <Provider value={{
                clicks: this.state.clicks,
                addClicks: this.addClicks
            }}>
                <div style={boxStyles}>
                <button onClick={this.handleClick}>Padre</button>
                <Header/>
                <Hijo/>
                </div>
            </Provider>
        )
    }
}

export default App