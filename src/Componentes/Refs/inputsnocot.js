import React, { Component } from 'react'


class InputsNoControlados extends Component{
    state ={
        techs: ['React']
        , active: true, 

    }

    handleSubmit = (event) =>{
        event.preventDefault()
        const name = event.target[0].value
        const email = event.target[1].value

        this.props.onSend({name, email})
    }

    handleChange= (event) =>{
        const techs = Array.from(event.target.selectedOptions, (option => option.value))
        this.setState({ techs })
        console.log(techs)
    }

    handleCheck = (e) =>{
        this.setState({
            active: e.target.checked
        })
    }

    render(){
        return(
        <div>   
            {this.state.active && (
                <h1>HOLIWI</h1>
            )}
                <form
                    onSubmit={this.handleSubmit}
                >
                    <p>
                        <label htmlFor='name'>Nombre: </label>
                        <input 
                        type= "text"
                        placeholder='Nombre'
                        id='name'
                    />
                    </p>
                    <p>
                        <label htmlFor='email'>Email: </label>
                        <input 
                        type= "text"
                        placeholder= 'email'  
                        id='email' 
                    />
                    </p>
                    <h1>{this.state.techs}</h1>
                    <select 
                        value={this.state.techs} 
                        onChange={this.handleChange}
                        multiple
                    >
                            <option value="Angular" >Angular</option>
                            <option value="React" >React</option>
                            <option value="Vue" >Vue</option>
                            <option value="Vanilla" >Vanilla</option>

                    </select>
                    <button >
                        click
                    </button>
                    <input 
                        type='checkbox'    
                        checked={this.state.active} 
                        onChange={this.handleCheck}
                    />
                </form>
                <ul>
                    {this.state.techs.map(tech => (
                        <li key = {tech}>
                            {tech}
                        </li>
                    ))}
                        
                    
                </ul>
            </div>
        )
    }
}

class App extends Component{

    send = (data) => {
        console.log(data)
    }

    render(){
        return(
            <div>
                <InputsNoControlados
                    onSend={this.send}
                >
                </InputsNoControlados>
            </div>
        )
    }
}

export default App