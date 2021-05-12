import React, { Component } from 'react';
import { IMC } from './classes/IMC';
import { InputLabel } from './component/InputLabel';
import { ResultLabel } from './component/ResultLabel';

class App extends Component{
  constructor(){
    super();

    this.state = {
      IMC: new IMC(0, 0),
      peso: 0,
      altura: 0,
      calculandoIMC: false
    }
  }

  pesoOnChange = (event) => {
    this.setState(
      {
        IMC: new IMC(+event.target.value, this.state.altura),
        peso: +event.target.value
      }
    );
  } 

  alturaOnChange = (event) => {
    this.setState(
      {
        IMC: new IMC(this.state.peso, this.state.altura),
        altura: +event.target.value
      }
    );    
  }

  render(){
    return(
      <div>
      <header>
        <div className="container">
          <div className="card-panel">
            <p className="row">Calcule o seu IMC: </p>
          </div>
          <div>
            <div>
              <InputLabel label="Digite o seu Peso (Kg):" id="peso" onChange={this.pesoOnChange} />
            </div>
            <div>
              <InputLabel label="Digite o sua Altura (metros):" id="altura" onChange={this.alturaOnChange}/>
            </div>
          </div>
          <ResultLabel result={this.state.IMC._getIMC()}/>
        </div>
      </header>
    </div>
    )
  }
}

export default App;
