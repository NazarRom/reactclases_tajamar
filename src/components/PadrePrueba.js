import React, { Component } from 'react'
import HijoPrueba from './HijoPrueba'
export default class PadrePrueba extends Component {
    //creo un metodo en el padre 
    //que posteriormente se lo mandaré a hijo
    state = {
        dato :[]
    }
    metodoPadre =(parametro)=>{
        //1 recibo el parametro en los parentesis
        //ahora puedo pintarlo
        //es obligatorio el state para hacerlo
        this.setState({
            dato:parametro
        })
    }

    sumarNumero=()=>{
        console.log("2+2=4");
    }

  render() {
    return (
      <div>
        <h1>PadrePrueba</h1>
        <h2>{this.state.dato}</h2>
        <HijoPrueba saludo="Hola desde padre" metodoPadre={this.metodoPadre} sumarNumero={this.sumarNumero}/>
        </div>
    )
  }
}
