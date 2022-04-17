import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.css']
})
export class MemoriaComponent implements OnInit {

  availableImages = ['imix', 'ik', 'akbal', 'kan', 'chikchan', 'kimi', 'manik', 'lamat', 'muluk', 'ok', 'chuen', 'eb', 'ben', 'ix', 'men', 'kib', 'kaban', 'etznab', 'kauak', 'ajau'];
	availableImages2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
	availableNames = ['imix', 'ik\'', 'ak\'bal', 'k\'an', 'chikchan', 'kimi', 'manik', 'lamat', 'muluk', 'ok', 'chuen', 'eb', 'ben', 'ix', 'men', 'k\'ib', 'kaban', 'etznab', 'kauak', 'ajau'];
  card_up = 0;

  constructor(){

  }

  ngOnInit(): void {
    setTimeout(() => {
      (<HTMLDivElement>document.getElementById("mayan-button")).style.display = "block";
    }, 100);
  }

  public chooseDifficult() {
    (<HTMLDivElement>document.getElementById("btn-start")).style.display = "none";
    (<HTMLDivElement>document.getElementById("chooseDifficults")).style.display = "flex";
    (<HTMLDivElement>document.getElementById("title-mayan")).style.display = "flex";
  }

  public start() {
    (<HTMLDivElement>document.getElementById("chooseDifficults")).style.display = "none";
    var maindiv = document.getElementById("boardgame");
    (<HTMLDivElement>document.getElementById("score")).style.display = "flex";
    let moves = 0;
    let max = 16;
    (<HTMLDivElement>maindiv).style.display = "";
    while ((<HTMLDivElement>maindiv).firstChild) {
        (<HTMLDivElement>maindiv).removeChild((<any>maindiv).lastChild);
    }

    var row = document.createElement('div')
    var nuevo_array = this.availableImages;
    var random_array = [];
    while (random_array.length < max) {
      var element = nuevo_array.splice(Math.floor(Math.random() * nuevo_array.length), 1);
      random_array.push(element);
      random_array.push(element);
    }

    const ImagesCopy = JSON.parse(JSON.stringify(random_array))
    for (let j = 1; j <= 16; j++) {
      row.classList.add('row');
      var div = document.createElement('div');
      div.setAttribute('class', 'flip-container')
      var flip_inner = document.createElement("div");
      flip_inner.setAttribute('class', 'flipper')
      var card_front = document.createElement("div");
      card_front.setAttribute('class', 'front')
      var logo = document.createElement('img')
      logo.src = "../../assets/imgs/logo.webp";
      logo.style.width = "75%";
      logo.style.height = "75%";
      card_front.appendChild(logo);
      var card_back = document.createElement("div");
      card_back.setAttribute('class', 'back')
      flip_inner.appendChild(card_front)
      flip_inner.appendChild(card_back)
      div.appendChild(flip_inner)
      var image = document.createElement('img')
      const randomImg = "../../assets/imgs/Kin/" + ImagesCopy.splice(Math.floor(Math.random() * ImagesCopy.length), 1) + ".png";
      image.setAttribute('src', randomImg);
      div.setAttribute('card', randomImg)
      card_back.appendChild(image)
      row.appendChild(div);

      if (j % 4 == 0) {
        (<HTMLDivElement>document.getElementById('boardgame')).append(row)
        row = document.createElement('div')
      }

      div.addEventListener('click', (event) =>{
        const element = (<HTMLDivElement>event.currentTarget);
        this.comprobation(element,max);
      })
    }
  }

  public start2() {
    (<HTMLDivElement>document.getElementById("chooseDifficults")).style.display = "none";
    var maindiv = document.getElementById("boardgame");
    (<HTMLDivElement>document.getElementById("score")).style.display = "flex";
    let moves = 0;
    let max = 16;
    (<HTMLDivElement>maindiv).style.display = "";
    while ((<HTMLDivElement>maindiv).firstChild) {
        (<HTMLDivElement>maindiv).removeChild((<any>maindiv).lastChild);
    }
    var row = document.createElement('div');

    var choosen = [];
    var copyArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    while (choosen.length < max) {
      var element = copyArray.splice(Math.floor(Math.random() * copyArray.length), 1);
      choosen.push(parseInt(element[0]));
      choosen.push(parseInt(element[0]) + 20);
    }
    for (let i = 1; i <= 16; i++) {
      var c = choosen.splice(Math.floor(Math.random() * choosen.length), 1)[0];
      row.classList.add('row');
      var div = document.createElement('div');
      div.setAttribute('class', 'flip-container')
      var flip_inner = document.createElement("div");
      flip_inner.setAttribute('class', 'flipper')
      var card_front = document.createElement("div");
      card_front.setAttribute('class', 'front')
      var logo = document.createElement('img')
      logo.src = "../../assets/imgs/logo.webp";
      logo.style.width = "75%";
      logo.style.height = "75%";
      card_front.appendChild(logo);
      var card_back = document.createElement("div");
      card_back.setAttribute('class', 'back')
      flip_inner.appendChild(card_front)
      flip_inner.appendChild(card_back)
      div.appendChild(flip_inner)
      if (c > 20) {
        c = c - 20;
        var h1 = document.createElement('h1');
        h1.textContent = this.availableNames[c - 1].toUpperCase();
        div.setAttribute('card', (c - 1)+"");
        card_back.appendChild(h1);
      } else {
        var image = document.createElement('img');
        const randomImg = "../../assets/imgs/Kin/" + c + ".png";
        image.setAttribute('src', randomImg);
        div.setAttribute('card', (c - 1)+"");
        card_back.appendChild(image);
      }
      row.appendChild(div);
      if (i % 4 == 0) {
        (<HTMLDivElement>document.getElementById('boardgame')).append(row);
        row = document.createElement('div');
      }

      div.addEventListener('click', (event) => {
        const element = (<HTMLDivElement>event.currentTarget);
        this.comprobation(element,max);
      })
    }
  }

  public start3() {
    (<HTMLDivElement>document.getElementById("chooseDifficults")).style.display = "none";
    var maindiv = document.getElementById("boardgame");
    (<HTMLDivElement>document.getElementById("score")).style.display = "flex";
    let moves = 0;
    let max = 16;
    (<HTMLDivElement>maindiv).style.display = "";
    while ((<HTMLDivElement>maindiv).firstChild) {
        (<HTMLDivElement>maindiv).removeChild((<any>maindiv).lastChild);
    }
    var row = document.createElement('div');

    var choosen = [];
    var copyArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    while (choosen.length < max) {
      var element = copyArray.splice(Math.floor(Math.random() * copyArray.length), 1);
      choosen.push(parseInt(element[0]));
      choosen.push(parseInt(element[0]) + 20);
    }
    for (let i = 1; i <= 16; i++) {
      var c = choosen.splice(Math.floor(Math.random() * choosen.length), 1)[0];
      row.classList.add('row');
      var div = document.createElement('div');
      div.setAttribute('class', 'flip-container')
      var flip_inner = document.createElement("div");
      flip_inner.setAttribute('class', 'flipper')
      var card_front = document.createElement("div");
      card_front.setAttribute('class', 'front')
      var logo = document.createElement('img')
      logo.src = "../../assets/imgs/logo.webp";
      logo.style.width = "75%";
      logo.style.height = "75%";
      card_front.appendChild(logo);
      var card_back = document.createElement("div");
      card_back.setAttribute('class', 'back')
      flip_inner.appendChild(card_front)
      flip_inner.appendChild(card_back)
      div.appendChild(flip_inner)
      if (c > 20) {
        c = c - 20;
        var h1 = document.createElement('h1');
        h1.textContent = c+"";
        div.setAttribute('card', (c - 1)+"");
        card_back.appendChild(h1);
      } else {
        var image = document.createElement('img');
        const randomImg = "../../assets/imgs/Kin/" + c + ".png";
        image.setAttribute('src', randomImg);
        div.setAttribute('card', (c - 1)+"");
        card_back.appendChild(image);
      }
      row.appendChild(div);
      if (i % 4 == 0) {
        (<HTMLDivElement>document.getElementById('boardgame')).append(row)
        row = document.createElement('div');
      }

      div.addEventListener('click', (event) => {
        const element = (<HTMLDivElement>event.currentTarget);
        this.comprobation(element,max);
      })
    }

  }

  public start4() {
    (<HTMLDivElement>document.getElementById("chooseDifficults")).style.display = "none";
    var maindiv = document.getElementById("boardgame");
    (<HTMLDivElement>document.getElementById("score")).style.display = "flex";
    let moves = 0;
    let max = 16;
    (<HTMLDivElement>maindiv).style.display = "";
    while ((<HTMLDivElement>maindiv).firstChild) {
        (<HTMLDivElement>maindiv).removeChild((<any>maindiv).lastChild);
    }
    var row = document.createElement('div');

    var choosen = [];
    var copyArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    while (choosen.length < max) {
      var element = copyArray.splice(Math.floor(Math.random() * copyArray.length), 1);
      choosen.push(parseInt(element[0]));
      choosen.push(parseInt(element[0]) + 20);
    }
    for (let i = 1; i <= 16; i++) {
      var c = choosen.splice(Math.floor(Math.random() * choosen.length), 1)[0];
      row.classList.add('row');
      var div = document.createElement('div');
      div.setAttribute('class', 'flip-container')
      var flip_inner = document.createElement("div");
      flip_inner.setAttribute('class', 'flipper')
      var card_front = document.createElement("div");
      card_front.setAttribute('class', 'front')
      var logo = document.createElement('img')
      logo.src = "../../assets/imgs/logo.webp";
      logo.style.width = "75%";
      logo.style.height = "75%";
      card_front.appendChild(logo);
      var card_back = document.createElement("div");
      card_back.setAttribute('class', 'back')
      flip_inner.appendChild(card_front)
      flip_inner.appendChild(card_back)
      div.appendChild(flip_inner)
      if (c > 20) {
        c = c - 20;
        var h1 = document.createElement('h1');
        h1.textContent = c+"";
        div.setAttribute('card',  (c - 1)+"");
        card_back.appendChild(h1);
      } else {
        var h1 = document.createElement('h1');
        h1.textContent = this.availableNames[c - 1].toUpperCase();
        div.setAttribute('card', (c - 1)+"");
        card_back.appendChild(h1);
      }
      row.appendChild(div);
      if (i % 4 == 0) {
        (<HTMLDivElement>document.getElementById('boardgame')).append(row)
        row = document.createElement('div')
      }

      div.addEventListener('click', (event) => {
        const element = (<HTMLDivElement>event.currentTarget);
        this.comprobation(element,max);
      })
    }

  }


  public comprobation(element:any,max:any){
    if (this.time_stopped) {
      this.intervalo = setInterval(this.setTime, 1000);
      this.time_stopped = false;
    }
    if (!element.classList.contains("hover")) {
      element.classList.add("hover");
      this.card_up++;
      if (this.card_up == 2) {
        this.card_up = 0;
        var cards = document.querySelectorAll(".up")[0];
        if (cards.getAttribute("card") == element.getAttribute("card")) {
          cards.classList.add("match");
          cards.classList.remove("up");
          element.classList.add("match");
          this.addCorrect();
          if (document.querySelectorAll(".match").length == max) {
            this.time_stopped = true;
            clearInterval(this.intervalo)
          }
        } else {
          this.addError();
          setTimeout(() => {
            cards.classList.remove("up");
            cards.classList.remove("hover");
            element.classList.remove("hover");
          }, 1000);
        }
      } else {
        element.classList.add("up");
      }
    }
  }

  minutesLabel = document.getElementById("minutes");
  secondsLabel = document.getElementById("seconds");
  totalSeconds = 0;
  time_stopped = true;
  intervalo:any;

  public setTime() {
    var number_count:any = parseInt((<HTMLInputElement>document.getElementById("count")).value) + 1;
    (<HTMLInputElement>document.getElementById("count")).value = number_count;
    var valString = (number_count % 60) + "";
    if (valString.length < 2) {
      valString = "0" + valString;
    }
    (<HTMLDivElement>document.getElementById("seconds")).innerHTML = valString;
    valString = (Math.floor(number_count / 60)) + "";
    if (valString.length < 2) {
      valString = "0" + valString;
    }
    (<HTMLDivElement>document.getElementById("minutes")).innerHTML = valString;
  }

  public addCorrect() {
    var text_number:any = (<HTMLDivElement>document.getElementById("correct")).textContent;
    var number = parseInt(text_number) + 1;
    (<HTMLDivElement>document.getElementById("correct")).textContent = number+"";
  }

  public addError() {
    var text_number:any = (<HTMLDivElement>document.getElementById("error")).textContent;
    var number = parseInt(text_number) + 1;
    (<HTMLDivElement>document.getElementById("error")).textContent = number+"";
  }
}
