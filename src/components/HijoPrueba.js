import React, { Component } from 'react'

export default class HijoPrueba extends Component {
    //creo un metodo en el que recibo el metodo padre
    metodoHijo=()=>{
        //creo algo que se lo mandaré al padre
        var saludo = "Hola desde el hijo";
        //recibo el metodo por los props y le añado lo que quiera
        this.props.metodoPadre(saludo);
        console.log("mandado");
    }
    suma = this.props.sumarNumero;
    
  render() {
    return (
      <div>
        <h1>HijoPrueba</h1>
        <h2>Datos desde COMPONENTE PADRE "{this.props.saludo}"</h2>
        <hr/>
        <h2>Mandar datos a Padre con un boton</h2>
        {/* voy a mandar el metodo al padre mediante el boton */}
        <button onClick={this.metodoHijo}>Mandar datos</button>
        <button onClick={this.suma}>Sumar</button>
        </div>
    )
  }
}
