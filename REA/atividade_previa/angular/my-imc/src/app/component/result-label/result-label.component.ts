import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-result-label',
  templateUrl: './result-label.component.html',
  styleUrls: ['./result-label.component.css']
})
export class ResultLabelComponent implements OnInit {
  
  resultado: string = "Carregando";
  @Output() Resultado = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  onCalcular(res: string) {
    this.resultado = res;
  }
}
