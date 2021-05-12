import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-label',
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.css']
})
export class InputLabelComponent implements OnInit {
  @Input() label: string;
  @Input() customId: string;
  @Input() value: number;

  @Output() inputChangeValue = new EventEmitter();

  constructor() { }

  onChangeValue(newValue) {
    if (!!this.inputChangeValue) {
      this.inputChangeValue.emit(newValue);
    }
  }

  ngOnInit(): void {
    const firstInput = document.querySelector('input');
    firstInput.focus();
  }
}
