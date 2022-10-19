import { Component } from "react";

class DibujosComplejos extends Component{
    //metodo que nos devuelva una serie de numeros
    //con formato html
    dibujarNumeros = () =>{
        //declaramos un array para almacenar los numeros
        //dicho array no contendrá solamente los numeros
        //sino que también tendrá que contener el codigo html
        var lista = [];
        //una lista contiene un metodo push() para ir
        //añadiendo elementos
        //cerar un bucle para generar numeros y añadirlos
        //a nuestra coleccion
        
        for (var i = 1;i <= 10;i++){
            var numero = parseInt(Math.random() * 100) +1;
            //el dibujo html se almacena en la coleccion
            //junto a los elementos a dibujar
            lista.push(<li key={i}>{numero}</li>);
        }
        return lista;
    }
    render(){
        return(
            <div>
                <h1>DibujosComplejos</h1>
                <ul>
                    {this.dibujarNumeros()}
                </ul>
            </div>
        )
    }
}
export default DibujosComplejos;