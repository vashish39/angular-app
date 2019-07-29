import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'calc',
  templateUrl: 'calc.component.html',
  styleUrls: ['calc.component.css']
})
export class CalcComponent {
    public number1: number;
    public number2: number;
    public result: number;
    public test = false;

    public add() {
        this.result = this.number1 + this.number2;
        this.test = true;
    }
    public sub() {
        this.result = this.number1 - this.number2;
        this.test = true;
    }
    public multi() {
        this.result = this.number1 * this.number2;
        this.test = true;
    }
    public divide() {
        this.result = this.number1 / this.number2;
        this.test = true;
    }
}
