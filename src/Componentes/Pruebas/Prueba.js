import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import Styles from './Prueba.module.css'


class PortalModal extends Component{
  render(){
    if (!this.props.visible){
      return null
    }

    return ReactDOM.createPortal((
      <div className= {Styles.children}>
        {this.props.children}
      </div>
    ), document.getElementById('modal-root'))
  }
}

class Prueba extends Component {
 state={
    visible: false,
    num:0,
 }

 componentDidMount () {
   setInterval(()=>{
     this.setState(state =>({
       num: state.num +1
     }))
   }, 1000)
 }

 mostrar =() =>{
    this.setState({visible: true})
 }
 cerrar =() =>{
  this.setState({visible: false})
}

  render () {
    return (
      <div>
        <button onClick={this.mostrar}>Mostrar</button>
        <PortalModal visible={this.state.visible}>
        <button onClick={this.cerrar}>Cerrar</button>
          Holiwi {this.state.num}
          
        </PortalModal>
      </div>
    )
  }
}

export default Prueba
