import React, { Component } from 'react'

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
        ( Hijo a Padre )
      </div>
      <div style={subtitleStyles}>
        Ejemplo Render Props
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

const withSizes = (Comp) => class extends Component{
  state={
    width: window.innerWidth,
    heigth: window.innerHeight
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleResize)
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize= () => {
    this.setState({
      width: window.innerWidth,
      heigth: window.innerHeight
    })
  }
  
  render(){
    const {width, heigth} = this.state
    return(
      <Comp 
        width= {width}
        heigth= {heigth}
      />
    )
  }
}


class App extends Component {
  render () {
    const {width, heigth} = this.props 
    return (
      <div style={boxStyles}>
        <Header/>
        <h1> {width}</h1>
        <h1> {heigth}</h1>
      </div>
    )
  }
}

export default withSizes(App)