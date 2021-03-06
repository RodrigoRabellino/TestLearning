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
          ( Hermanos )
        </div>
        <div style={subtitleStyles}>
          Parent Component
          <span role='img' aria-label='flame' >
            🔥
          </span>
        </div>
      </header>
    )
  }


class ComponentA extends Component{

    

    render(){
        const { num } = this.props
        return(
            <div style={blueStyles}>
                <button onClick ={this.props.onAdd}>
                    Component A ({num})
                </button>
            </div>
        )
    }
}


class ComponentB extends Component{

    

    render(){
        const { num } = this.props
        return(
            <div style={redStyles}>
                <button onClick ={this.props.onAdd}>
                    Component B ({num})
                </button>
            </div>
        )
    }
}

class App extends Component{
    state ={
        countA: 0,
        countB: 0

    }

    handleAddA=()=>{
        this.setState(state => ({
            countA: state.countA + 1
        }))
    }

    handleAddB=()=>{
        this.setState(state => ({
            countB: state.countB + 2
        }))
    }
    Clear=()=>{
        this.setState(state => ({
            countA:0,
            countB:0
        }))
    }

    render(){

        const { countA, countB } = this.state

        return(
            <div style={boxStyles}>
                <Header/>
                <ComponentA
                    num={countA}
                    onAdd={this.handleAddB}
                />
                <ComponentB
                    num={countB}
                    onAdd={this.handleAddA}
                />
                <button onClick={this.Clear}>
                    Clear
                </button>
            </div>
        )
    }
}


export default App