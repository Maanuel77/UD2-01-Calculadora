import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-calculator-page',
  styleUrl: './calculator-page.css',
  templateUrl: './calculator-page.html',
})
export class CalculatorPage {
  digitos = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  pantalla = '0';
  acumulado = 0;
  operacion: '+' | '-' | null = null;
  nuevoNumero = true;

  pulsarDigito(digito: number) {
    if (this.nuevoNumero || this.pantalla === '0') {
      this.pantalla = digito.toString();
      this.nuevoNumero = false;
    } else {
      this.pantalla += digito;
    }
  }

  pulsarOperacion(op: '+' | '-') {
    this.calcular();
    this.operacion = op;
    this.nuevoNumero = true;
  }

  pulsarIgual() {
    this.calcular();
    this.operacion = null;
    this.nuevoNumero = true;
  }

  limpiar() {
    this.pantalla = '0';
    this.acumulado = 0;
    this.operacion = null;
    this.nuevoNumero = true;
  }

  private calcular() {
    const valor = Number(this.pantalla);
    if (this.operacion === '+') this.acumulado += valor;
    else if (this.operacion === '-') this.acumulado -= valor;
    else this.acumulado = valor;
    this.pantalla = this.acumulado.toString();
  }
}
