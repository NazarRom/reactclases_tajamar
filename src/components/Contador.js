//debemos importar Component paraESTA SINTAXIS
import {Component} from 'react';
//podemos utilizar functions externas a la clases
//en dichas funciones no se puede utilizar nada de la clase
function miFuncion(){
    console.log("Funcion externa a la clase");
}
class Contador extends Component{
    //zona de la declaracion de variables no utiliza ni VAR CONST ni nada para su declaracion

    numero = 1;
    //queremos un metodo para incrementar dicho numero
    incrementoNumero = () =>{
        //PARA  ACCEER A los objetos de la clase utilizamos THIS a la fuerza
        console.log("Numero"+this.numero);
        this.numero = this.numero + 1;
    }
    //el concepto state es el mismo
    //utilizamos state a nivel de clase para inicializar
    //los elementos de su interior
    //en este ejemplo queremos cambiar un valor de un contador
    state = { valor: parseInt(this.props.Inicio)};
    //para modificar el valor del stage
    //utilizamos un metodo de la clase llamado 
    //setState
    incrementarValor = () => {
        this.setState({
            valor: this.state.valor + 1
        });
    }

    //toda clase debe contener un render()
    //que es el dibujo y se actualiza cada vez
    //que cambiamos un state
    //el codigo interno del render es como utilizar function()
    render(){
        return(
            <div>
                <h1>Contador JSX ES6</h1>
                <h2 style={{color:"blue"}}> Inicio: {this.props.inicio}</h2>
                <h2 style = {{color:"red"}}>Valor del state: {this.state.valor}</h2>
                {/*la llamada a lo metodos de la clase 
                se realiza de forma más sencilla y sin parentesis*/}
                <button onClick={this.incrementarValor}>Incrementar valor State</button>
                {/*tambien podemos utilizar function anonima dentro del evento*/}
                <button onClick={ ()=> {
                    //si llamamos a cualquier elemneto fuera de la clase 
                    //se hace sin this
                    miFuncion();
                    //si llamamos a elemntos de la clase 
                    //se realiza con this
                    this.incrementoNumero();
                }}>Pulsa</button>
            </div>
        )
    }
}
export default Contador;