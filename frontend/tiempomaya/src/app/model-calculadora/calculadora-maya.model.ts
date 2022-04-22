/*
* importamos el convertidor de numeros
*/
import {Directive, Input } from '@angular/core';
import { ConvertidorNumero } from './convertidor-numero.model';

@Directive()
export class CalculadoraMaya {

  private operation: boolean = false;
  @Input()convertidor!:ConvertidorNumero;

  constructor() {
    this.convertidor = new ConvertidorNumero();
  }

  carry = 0;
  public plus(comps1:any, comps2:any) {
    var result = [];
    this.carry = 0;
    result.push(this.moreThan19(comps1[0], comps2[0]));
    result.push(this.moreThan19(comps1[1], comps2[1]));
    result.push(this.moreThan19(comps1[2], comps2[2]));
    result.push(this.moreThan19(comps1[3], comps2[3]));
    return result;
  }

  public minus(comps1:any, comps2:any) {
    var result = [];
    if (comps1 > comps2) {
      let rest = comps1 - comps2;
      return this.convertidor.convertirANumeroMaya(rest);

    } else  {
      for (let i = 0; i < 4; i++) {
        result.push(0);
      }
      return  result;
    }
  }


  public moreThan19(number1:any, number2:any) {
    var tmp = parseInt(number1) + parseInt(number2) + this.carry;
    if (tmp > 19) {
      this.carry = 1;
      return tmp % 20;
    } else {
      this.carry = 0;
      return tmp;
    }
  }

  public division(valueOne : any, valueTwo: any) {
    let result :any;

    if (valueTwo > 0) {
      result = Math.trunc(valueOne / valueTwo);
    } else  {
      alert('no se puede dividir un numero en cero');
      result = 0;
    }
    return this.convertidor.convertirANumeroMaya(result);
  }

  public multiplication(valueOne : any, valueTwo: any) {
    let results :any;
    results = valueOne * valueTwo;
    console.log('el resultado de la multiplicacion es: ' + results);
    return this.convertidor.convertirANumeroMaya(results);
  }

  public decimal(result:any) {
    return this.convertidor.convertirDecimal(result);
  }
}
