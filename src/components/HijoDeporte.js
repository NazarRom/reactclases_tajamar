import { Component } from "react";

class HijoDeporte extends Component
{
   
    seleccionarFavorito = () =>{
        //llamaremos al metodo del parent mediante props
        //capturamos el deporte 
        var deporte = this.props.nombre
        //llamamos al parent mediante props
        //con el nombre de metodo que nos han indicado
        this.props.mostrarFavorito(deporte);
    }

    render(){
       
        return(
            <div>
                <h1 style={{color:"green"}}>{this.props.nombre}</h1>
                
                <button onClick={()=>this.seleccionarFavorito()}>Seleccionar favorito</button>
            </div>
        )
    }

}

export default HijoDeporte;