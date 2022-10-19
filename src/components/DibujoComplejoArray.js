import { Component } from "react";
class DibujoComplejoArray extends Component {
    //almacenamos dentro de un state un array
    //de string (nombres)
    state = {
        nombres: ["Lucia", "Diana", "Adrian", "Marcos", "Carlos"]
    }
    nuevoNombre = () =>{
        //como añadimos elementos a un array
        this.state.nombres.push("Nuevo Nombre");
        this.setState({
            nombres: this.state.nombres
        })
    }
    render() {
        return (
            <div>
                <h1>Dibujo Complejo Array</h1>
                <button onClick={this.nuevoNombre}>crearNombre</button>
                {
                    //CODIGO LOGICO con lenguaje REACT
                    this.state.nombres.map((name,index)=>{
                        //este codigo se ejecuta por cada elemento
                        //nunca podemos dejarlo vacio
                        //siempre debe volver un return
                        return (<h3 style={{color:"red"}}>{name}</h3>)
                    })
                }
            </div>
        )
    }
}
export default DibujoComplejoArray;