import React, {Component} from 'react'
import Boton from './Boton'


class LimiteErrores extends Component {
    state = {
        tieneError: false, 
    }
    componentDidCatch (){
        this.setState({tieneError: true})
    }
    render(){
        if(this.state.tieneError){
            return(
            <div>
                Wops! se fue a la bosta. 
            </div>)
        }
        return this.props.children
    }
}


class App extends Component {

    render() {
        return(
            <div>
                <LimiteErrores>
                    <Boton/>
                </LimiteErrores>
                
            </div>
        )
    }


}


export default App