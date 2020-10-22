import React, { Component } from 'react'
import PubSub from 'pubsub-js'

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

  const greenStyles = {
    ...boxStyles,
    border: '1px solid green',
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
          Observer Pattern
          <span role='img' aria-label='flame' >
            🔥
          </span>
        </div>
      </header>
    )
  }


class Hijo extends Component{
    render (){
        return(
            <div style={blueStyles}> 
                <Nieto/>
            </div>
        )
    }
}

class Nieto extends Component{
    render (){
        return(
            <div style={redStyles}> 
                <Bisnieto/>
            </div>
        )
    }
}

class Bisnieto extends Component{
    state = {
        message: '++++++'
    }
    componentDidMount (){
        PubSub.subscribe('SaludoPadre', (e, data) =>{
            this.setState({
                message: data.title
            })

        } )
    }
    componentWillUnmount (){
        PubSub.unsubscribe('SaludoPadre')
    }

    handleClick = () =>{
        PubSub.publish('Saludo', 'hola soy el bisnieto')
    }

    render (){
        return(
            <div style={greenStyles}> 
                <p>{this.state.message}</p>
                <button onClick= {this.handleClick}>
                    Nieto
                </button>
            </div>
        )
    }
}

class App extends Component{
    componentDidMount (){
        PubSub.subscribe('Saludo', (e, data) =>{
            alert(data)
        } )
    }

    handleClick = () =>{
        PubSub.publish('SaludoPadre', {
            title: 'hola desde <App />'
        })

    }

    render(){
        return(
            <div style={boxStyles}>
                <button onClick={this.handleClick}>Padre</button>
                <Header/>
                <Hijo/>
            </div>
        )
    }
}

export default App