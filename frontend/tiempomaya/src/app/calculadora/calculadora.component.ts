import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  actual: string | undefined;
  valueOne = 0;
  valueTwo = 0;

  constructor() {

  }
  ngOnInit():void {
    var filas: any = document.querySelectorAll(".row");
    var count = 0;
    filas.forEach((div:HTMLDivElement) => {
      for (let i = 0; i < 5; i++) {
        var div2 = document.createElement("div");
        div2.classList.add("mayan-number-card");
        div2.setAttribute("number", count + "");
        div2.addEventListener('click', (event) => {
          var id = (this.actual) ? this.actual : "";
          var can: any = document.getElementById(id);
          var ctx = can.getContext("2d");
          can.setAttribute("number", (<HTMLDivElement>event.currentTarget).getAttribute("number"));
          let numer = (<HTMLDivElement>event.currentTarget).getAttribute("number");
          this.dibujando(numer, ctx, can);
          let va1 = [this.returnNumber("o1l1"), this.returnNumber("o1l2"), this.returnNumber("o1l3"), this.returnNumber("o1l4")];
          let va2 = [this.returnNumber("o2l1"), this.returnNumber("o2l2"), this.returnNumber("o2l3"), this.returnNumber("o2l4")];
          this.valueOne = this.convertirDecimal(this.convertArray(va1));
          this.valueTwo = this.convertirDecimal(this.convertArray(va2));
          //this.valueOne += this.obteneiendoValorDecimal(id, numer);
          (<HTMLDivElement>document.getElementById("hide")).style.display = "none";
        });
        var can = document.createElement("canvas");
        can.width = 50;
        can.height = 50;
        var ctx = can.getContext('2d');
        this.dibujando(count, ctx, can);
        div2.appendChild(can);
        var tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        var tooltiptext = document.createElement("span");
        tooltiptext.classList.add("tooltiptext");
        tooltiptext.textContent = count + "";
        //tooltip.appendChild(tooltiptext);
        div2.appendChild(tooltiptext);
        div.appendChild(div2);
        count++;
      }
    });
  }


  public selectNumber(as: string) {
    (<HTMLDivElement>document.getElementById("hide")).style.display = "flex";
    (<HTMLDivElement>document.getElementById("hide")).style.visibility = "visible";
    console.log(as);
    this.actual = as;
  }

  public dibujando(numero:any, ctx:any, canvas:any) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let random:any = numero;
    if (random == 0) {
      var lineWidth:any = canvas.width * 0.07;
      ctx.lineWidth = lineWidth;
      this.drawEllipse(canvas.width / 2, canvas.width / 2, (canvas.width - lineWidth) / 2, canvas.width / 5, 0, ctx);
      ctx.moveTo(0, canvas.width / 2);
      ctx.bezierCurveTo(0, canvas.width * 4 / 7, canvas.width, canvas.width * 4 / 7, canvas.width, canvas.width / 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.width * 2 / 7);
      ctx.lineTo(canvas.width / 2, canvas.width * 4 / 7);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(canvas.width / 4, canvas.width * 2 / 7 + lineWidth);
      ctx.lineTo(canvas.width / 4, canvas.width * 4 / 7);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(canvas.width * 3 / 4, canvas.width * 2 / 7 + lineWidth);
      ctx.lineTo(canvas.width * 3 / 4, canvas.width * 4 / 7);
      ctx.stroke();
    } else {
      let width = canvas.width;
      let size = canvas.width / 5;
      let space = canvas.width * 0.05;
      let no_barras = Math.floor(random / 5);
      let positions_y = [size * 4, size * 3, size * 2, size];
      let barras = random % 5;
      if (no_barras == 0) {
        let limit_x = barras + 1;
        let size_point = canvas.width / (limit_x);
        for (let i = 1; i < limit_x; i++) {
          this.point(size_point * i, positions_y[0], (size / 2) - space, ctx, (size / 1.6) - space);
        }
      } else {
        let limit_xy = 6;
        let size_line = canvas.width / (limit_xy);
        if (barras == 0) {
          for (let i = 0; i < no_barras; i++) {
            let y1 = positions_y[i];
            let x1 = size_line * 0.5;
            let x2 = size_line * 5.5;
            this.line(x1, y1, x2, (size / 1.3) - space, ctx);
          }
        } else {
          let limit_x = barras + 1;
          let size_point = canvas.width / (limit_x);
          let last_position = no_barras;
          for (let i = 0; i < no_barras; i++) {
            let y1 = positions_y[i];
            let x1 = size_line * 0.5;
            let x2 = size_line * 5.5;
            this.line(x1, y1, x2, (size / 1.3) - space, ctx);
          }
          for (let i = 1; i < limit_x; i++) {
            this.point(size_point * i, positions_y[last_position], (size / 2) - space, ctx, (size / 1.6) - space);
          }
        }
      }

    }
  }

  public point(x:any, y:any, radius:any, ctx:any, lineWidth:any) {
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.stroke();
  }

  public line(x:any, y:any, x2:any, lineWidth:any, ctx:any) {
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y);
    ctx.stroke();
  }

  public drawEllipse(x:any, y:any, radiusX:any, radiusY:any, rotation:any, ctx:any) {
    ctx.beginPath();
    ctx.ellipse(x, y, radiusX, radiusY, rotation, 0, 2 * Math.PI);
    ctx.stroke();
  }

  resutadoDecimal= 0;
  public resolve() {
    var comps_operator1 = [this.returnNumber("o1l1"), this.returnNumber("o1l2"), this.returnNumber("o1l3"), this.returnNumber("o1l4")]; //returns the operator1 in parts, index 0 is the section of 20^0
    var comps_operator2 = [this.returnNumber("o2l1"), this.returnNumber("o2l2"), this.returnNumber("o2l3"), this.returnNumber("o2l4")]; //returns the operator2 in parts, index 0 is the section of 20^0
    var result:any = [] //this array will be for the result, send the numbers in order being 0 the section 20^0

    switch ((<HTMLDivElement>document.getElementById("operator")).textContent) {
      case "+":
        result = this.plus(comps_operator1, comps_operator2);
        break;
      case "-":
        result = this.minus(comps_operator1, comps_operator2);
        break;
      case "*":
        result = this.multiplication();
        break;
      case "/":
        result = this.division();
        break;
    }
    this.resutadoDecimal = this.convertirDecimal(result);
    console.log(result);
    this.drawResult(result);
  }

  public convertArray(value:any) {
    let result:any = [];
    for (let i = 0; i < 4; i++) {
      result.push(parseInt(value[i]));
    }
    console.log(result);
    return result;
  }

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
    this.carry = 0;
    for (let i = 0; i < comps1.length; i++) {
      var next = ((i + 1) < comps1.length) ? comps1[i + 1] : 0;
      var res = this.minusOperation(comps1[i], comps2[i], next);
      if (res != -1) {
        result.push(res);
      }
    }
    return result;
  }

  public multiplication() {
    let results :any;
    results = this.valueOne * this.valueTwo;
    console.log('el resultado de la multiplicacion es: ' + results);
    return this.convertirANumeroMaya(results);
  }

  public division() {
    let result :any;
    if (this.valueTwo > 0) {
      result = this.valueOne / this.valueTwo;
    } else  {
      alert('no se puede dividir un numero en cero');
      result = 0;
    }

    return this.convertirANumeroMaya(result);

  }

  public  convertirANumeroMaya(valor:any) {
    let residuo = 1;
    console.log('estamos aquei');
    var result = [];
    let level1 = 0, level2 = 0, level3 =0, level4 = 0;
    while (residuo > 0) {
      console.log('entramos en el wile ' +  residuo + ' ' + valor);
      if (valor >= 8000) {
        level4 = (valor / 8000).valueOf();
        console.log(level4)
        residuo = valor % 8000;
        valor = residuo;
      } else if (valor >= 400) {
        level3 = (valor / 400).valueOf();
        console.log(level3)
        residuo = valor % 400;
      } else if (valor >= 20) {
        level2 = (valor / 20).valueOf();
        console.log(level2)
        residuo = valor % 20;
        valor = residuo;
      } else {
        level1 = valor
        residuo = 0;
        console.log(level1)
      }
    }
    result.push(level1);
    result.push(level2);
    result.push(level3);
    result.push(level4);

    return result;
  }

  public minusOperation(number1:any, number2:any, next:any) {
    var tmp = parseInt(number1) - parseInt(number2) + this.carry;
    if (tmp < 0) {
      if (next > 0) {
        tmp += 20;
        this.carry = -1;
        return tmp;
      } else {
        return 0;
      }
    } else {
      this.carry = 0;
      return tmp;
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

  public returnNumber(id:any) {
    return (<HTMLDivElement>document.getElementById(id)).getAttribute("number");
  }

  public drawResult(result:any) {
    if (result.length == 4) {
      var d = document;
      var cans = [d.getElementById("rl1"), d.getElementById("rl2"), d.getElementById("rl3"), d.getElementById("rl4")];
      for (let i = 0; i < cans.length; i++) {
        this.dibujando(result[i], (<HTMLCanvasElement>cans[i]).getContext("2d"), cans[i]);
      }
    } else {
      alert("Elige algún numero")
    }
  }


  public selectOperation() {
    (<HTMLDivElement>document.getElementById("hide2")).style.display = "flex";
    //(<HTMLDivElement>document.getElementById("hide")).style.display = "flex";
    (<HTMLDivElement>document.getElementById("hide2")).style.visibility = "visible";
  }

  public changeOperation(operation:any) {
    (<HTMLDivElement>document.getElementById("operator")).textContent = operation;
    (<HTMLDivElement>document.getElementById("hide2")).style.display = "none";
  }
}
