/**
 * Serviço responable para ejecutar las operaciones de
 * calculadora
 */

import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService {
/*Define as constantes ultilizadas
  para identificar as operaçoes de calculo*/
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }
/**
 * Método que calcula operaciones matematicas con
 * dos numeros
 * Soporta las operaçiones suma, resta, multiplicacion
 * y division.
 */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; //almacena el resultado de la operación

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }

}
