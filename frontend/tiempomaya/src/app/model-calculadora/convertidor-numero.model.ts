export class ConvertidorNumero {

  private selected: boolean = false;

  constructor() {
    console.log('convertir un nuemro');
  }

  /* @parametro result que es un array que contien el numero maya
  * convertir un numero maya a decimal
  * */
  public convertirDecimal(result:any) {
    let valueDecimal = 0;
    for (let i = 0; i < result.length; i++) {
      switch (i) {
        case 0:
          valueDecimal = result[i];
          break;
        case 1:
          valueDecimal += (result[i] * 20);
          break;
        case 2:
          valueDecimal += (result[i] * 400);
          break;
        case 3:
          valueDecimal += (result[i] * 8000);
          break;
      }
    }
    return valueDecimal;
  }

  /* @parametro valor que es el resultado de una operacion en la calcualdora
  * convertir un numero decimal a maya
  * retorna un array con el numero maya
  * */
  public  convertirANumeroMaya(valor:any) {
    let residuo = 1;
    var result = [];
    let level1 = 0, level2 = 0, level3 =0, level4 = 0;

    while (residuo > 0) {

      if (valor >= 8000) {
        level4 = Math.trunc(valor / 8000);
        console.log(level4)
        residuo = valor % 8000;
        valor = residuo;
      } else if (valor >= 400) {
        level3 = Math.trunc(valor / 400);
        console.log(level3)
        residuo = valor % 400;
        valor = residuo;
      } else if (valor >= 20) {
        level2 = Math.trunc(valor / 20);
        console.log(level2);
        residuo = valor % 20;
        valor = residuo;
      } else {
        level1 = valor;
        residuo = -1;
        console.log(level1)
      }
    }
    result.push(level1);
    result.push(level2);
    result.push(level3);
    result.push(level4);

    return result;
  }


}

