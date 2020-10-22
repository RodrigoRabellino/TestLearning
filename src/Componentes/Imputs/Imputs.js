import React, {Component} from 'react'
//import PropTypes from 'prop-types'


const Cube  = (props) =>{
    const state = {
        left: props.x,
        top: props.y,
        
        
    }
    
    const styleCube = {
            border: '1px solid black',
            backgroundColor: 'lightblue',
            width: '20px',
            height: '20px',
            left: state.left,
            top: state.top,
            
            
    }
    return(
            <div 
                style={styleCube}
            />
            )
    
}

class App extends Component{
    state={
        x: '50px', y:'50px',
    }
    
    getPosition = (e) => {
        this.setState({
            left: e.clientX,
            top: e.clientY
            
        })
        
    }

    render(){
        
        const style = {
            border: '1px solid black',
            backgroundColor: 'red',
            width: '700px',
            height: '700px',
         }
    

        return(
            <div 
                style={style}
                onMouseMove = {this.getPosition}
            >
                <Cube 
                    x = {this.state.x}
                    y = {this.state.y}
                    
                />    
            </div>
        )
    }
}

export default App