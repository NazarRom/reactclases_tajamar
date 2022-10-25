import { Component } from "react";
class NumeroHijo extends Component{
   
    sumarNumero = () =>{
        var num = this.props.numero;
        this.props.sumarHijo(num);
        //añadir al boton
    }
render(){
    return(
        <div>
            <h1>Soy hijo : {this.props.numero}</h1>
            <button onClick={()=>this.sumarNumero()} >Numero : {this.props.numero}</button> 
        </div>
    )
}
}
export default NumeroHijo;