import React from 'react'
import styles from './TarjetaFruta.module.css'

class TarjetaFuta extends React.Component {
    state = {
        cantidad: 0
    }

    agregar = () => this.setState({
        cantidad: this.state.cantidad + 1 
    })
    quitar =() => this.setState({
        cantidad: this.state.cantidad -1
    })
    limpiar =() => this.setState({
        cantidad: 0
    })
    
    render (){
        const hasItem = this.state.cantidad > 0
        const activeClass = hasItem ? styles['card-active'] : ''
        const clases = styles.card +' '+ activeClass
        

        return (
            <div className = {clases}>
                
                <h3>{this.props.name}</h3>
                <p>$ {this.props.price}</p>
            <div>Cantidad: {this.state.cantidad}</div>
                <button
                    onClick= {this.agregar}>+</button>
                <button
                    onClick= {this.quitar}>-</button>
                <button
                    onClick= {this.limpiar}>Limpiar</button>
            </div>
        )

    }

}


export default TarjetaFuta