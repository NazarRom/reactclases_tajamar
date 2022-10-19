import HijoDeporte from "./HijoDeporte";
import { Component } from "react";

class PadreDeportes extends Component{
    //creamos un array de deportes en state
    //para dibujarlo en la página
    state = {
        deportes: ["Petanca","Curling","Poker","Padel","Paintball"],
        favorito:""
    }
    //creamos un metodo que sera llamado desde el hijo
    //donde mostraremos el favorito
    mostrarFavorito = (deporteSeleccionado) =>{
        //Sefun recibamos el valor del hijo
        //lo incluimos en el state para mostarlo en la pagina
        this.setState({
            favorito: deporteSeleccionado
        })
    }
    render(){
        return(
            <div>
                <h1 style={{color:"red"}}>Padre deporte</h1>
                <h1 style={{color:"purple"}}>Su deporte favorito es: {this.state.favorito}</h1>

                {
                    //queremos dibujar cada deporte pero 
                    //usando la etiqueta del hijo
                    this.state.deportes.map((deporte,index)=>{
                        return (<HijoDeporte nombre={deporte} key={index} mostrarFavorito={this.mostrarFavorito}/>)
                    })

                }
            </div>
        )
}

}

export default PadreDeportes;