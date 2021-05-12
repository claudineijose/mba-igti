import { Component } from '@angular/core';
import { IMC } from './classes/IMC';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  imc = new IMC(0, 0);

  calcularIMC() {
    const res = (<HTMLInputElement>document.querySelector('#resultado'));
    res.textContent = this.imc._getIMC();
  }
  atualizaPeso(event) {
    this.imc.setPeso(+event.target.value)
    this.calcularIMC();
  }

  atualizaAltura(event) {
    this.imc.setAltura(+event.target.value);
    this.calcularIMC();
  }
}
