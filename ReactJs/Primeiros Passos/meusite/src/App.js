import React, {Component} from 'react';

/*

este exemplo estamos suando as Props, props são propriedade que pegamos de uma 

const Equipe = (props) => {
    return(
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>

            <Social fb={props.facebook}/>
        </div>
    );
}

const Sobre = (props) => {
    return(
        <div>
            <h2>Olá sou o (a) {props.nome}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade} anos</h3>
        </div>
    );
}

const Social = (props) =>{
    return(
        <div>
            <a href={props.fb}>Facebook</a>
            <a>LinkeInd</a>
            <a>GitHub</a>
        </div>
    );
}*/

/* Exemplo usando Component
class Equipe extends Component{
    render(){
        return(
           <div>
               <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
           </div>
        );
    }
}

class Sobre extends Component{
    render(){
        return(
            <div>
                <h2>Nome: {this.props.nome}</h2>
                <h2>Cargo: {this.props.cargo}</h2>
                <h3>Idade: {this.props.idade}</h3>
            </div>
        );
    }
}

function App(){
    return(
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Lucas" cargo="Dev" idade="26"/>
            <Equipe nome="Alves" cargo="Dev" idade="30"/>
            
        </div>
    )
}

export default App;*/


class App extends Component{
    
    constructor(props){
        super(props);
        this.state= {
            nome:"Lucas",
            contador: 0
        }
        this.aumentar = this.aumentar.bind(this)
        this.diminuir = this.diminuir.bind(this)
    }
    
    aumentar(){
        let state = this.state;
        state.contador += state.contador +1;
        this.setState(state)
    }

    diminuir(){
        let state = this.state;
        state.contador -= 1;
        this.setState(state)
    }

    render(){
        return(
            <div>
                <h1>Contador</h1>
                <h3>
                   <button onClick={this.diminuir}>-</button> 
                       {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h3>
            </div>
        );
    }
}

export default App;