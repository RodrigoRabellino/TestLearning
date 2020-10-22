import React, {Component} from 'react'



class App extends Component {
    
    state = {
        dispError: false, 
    }

    dispatchError =() => {
        this.setState({
            dispError: true
        })
    }

    render() {
        if (this.state.dispError){
            throw new Error('soy un error')
        }

        return(
            <button onClick={this.dispatchError}>
                SOY UN BOTON
            </button>

        )
    }


}


export default App