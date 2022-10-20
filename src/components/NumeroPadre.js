import { Component } from "react";
import NumeroHijo from "./NumeroHijo";
class NumeroPadre extends Component{
    state = {
        hijo: [],
        suma:0
    }
    nuevoHijo = () =>{
        this.state.hijo.push(parseInt(Math.random() *100));
        this.setState({
            hijo:this.state.hijo
        })
    }
    sumarHijo = (numeroSuma) =>{
        console.log(numeroSuma);
        this.setState(function(anterior){

            return {suma : numeroSuma + anterior.suma}
        })
        console.log(this.state.suma);
    }
render(){
    return(
        <div>
            <h1>Soy padre</h1>
            <h2>La suma es {this.state.suma}</h2>
            <button onClick={()=>this.nuevoHijo()}>AñadirNumero</button>
            {
            this.state.hijo.map((numero,index)=>{
                return <NumeroHijo numero={numero} key={index} sumarHijo={this.sumarHijo}/>
            })
           
        }
        </div>
        
    )
}
}
export default NumeroPadre;