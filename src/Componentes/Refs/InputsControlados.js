import React, { Component } from 'react'

class InputControlado extends Component {
    state = {
        text: '',
        tieneError: false,
        color: '#E8E8E8'
    }
    
    actualizar =(e)=> {
        const text = e.target.value
        
        let color ='green'

        if (text.trim() === ''){
            color = '#E8E8E8'
        }
        if(text.trim() !== '' && text.trim().length < 5){
            color = 'red'
        }

        this.setState({text, color})
        this.props.onChange(this.props.name, text)
    }

    

    render(){
        const style = {
            border: `1px solid ${this.state.color}`,
            padding: '0.3em 0.6em',
            outline: 'none'
        }
        return(
            <div>
                <input 
                    type="text"
                    value={this.state.text}
                    onChange={this.actualizar}
                    style={style}
                    placeholder= {this.props.placeholder}
                />
                
            </div>
        )
    }
}


class App extends Component{
    state={
        name: '',
        email: '',
    }

    actualizar =(name, text)=> {
        this.setState({
            [name]: text
        })
    }

    render(){
        return(
            <div>
                <h1>Soy un encabezado</h1>
                <InputControlado
                    onChange={this.actualizar}
                    placeholder = 'Nombre Completo'
                    name='name'
                />
                <InputControlado
                    onChange={this.actualizar}
                    placeholder = 'Email'
                    name ='email'
                />
                <h2>Name: {this.state.name}</h2>
                <h2>Email: {this.state.email}</h2>
            
            </div>
        )
    }
}

export default App