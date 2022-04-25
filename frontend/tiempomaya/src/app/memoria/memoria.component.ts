import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Juego } from '../modelo/Juego';
import { JuegoService } from '../servicio/juego.service';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.css']
})
export class MemoriaComponent implements OnInit {
  audio = new Audio();
  winAudio = new Audio();
  availableImages = ['imix', 'ik', 'akbal', 'kan', 'chikchan', 'kimi', 'manik', 'lamat', 'muluk', 'ok', 'chuen', 'eb', 'ben', 'ix', 'men', 'kib', 'kaban', 'etznab', 'kauak', 'ajau'];
  availableImages2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
  availableNames = ['imix', 'ik\'', 'ak\'bal', 'k\'an', 'chikchan', 'kimi', 'manik', 'lamat', 'muluk', 'ok', 'chuen', 'eb', 'ben', 'ix', 'men', 'k\'ib', 'kaban', 'etznab', 'kauak', 'ajau'];
  card_up = 0;
  juegos:Array<Juego>;
  juegosGlobales:Array<Juego>;
  dificultad = 1;

  constructor(private servicioJuego:JuegoService, private cookies:CookieService, private router:Router) {
    this.juegos = new Array<Juego>();
    this.juegosGlobales = new Array<Juego>();
    this.servicioJuego.obtenerJuegosUsuario(cookies.get("usuario")).subscribe(data=>{
      this.juegos = data;
    });
    this.servicioJuego.obtenerJuegosDificultad(this.dificultad).subscribe(data=>{
      this.juegosGlobales = data;
    });
  }

  ngOnInit(): void {
    this.audio.src = "../../assets/sounds/good.mpeg";
    this.audio.load();
    this.winAudio.src = "../../assets/sounds/win.mpeg";
    this.winAudio.load();
    setTimeout(() => {
      (<HTMLDivElement>document.getElementById("mayan-button")).style.display = "block";
    }, 100);
  }

  public chooseDifficult() {
    (<HTMLDivElement>document.getElementById("game")).style.display = "none";
    (<HTMLDivElement>document.getElementById("puntajes")).style.display = "none";
    (<HTMLDivElement>document.getElementById("win")).style.display = "none";
    (<HTMLDivElement>document.getElementById("btn-start")).style.display = "none";
    (<HTMLDivElement>document.getElementById("chooseDifficults")).style.display = "flex";
    (<HTMLDivElement>document.getElementById("title-mayan")).style.display = "flex";
  }


  public startDivGame(game: number) {
    var imgs: any = document.querySelector("#difficultActualGame")?.querySelectorAll("img");
    (<HTMLDivElement>document.querySelector("#difficultActualGame")).setAttribute("dificultad", game + "");
    imgs.forEach((element: HTMLImageElement) => {
      element.classList.remove("desaturate");
    });
    for (let i = game; i < 5; i++) {
      (<HTMLImageElement>imgs[i]).classList.add("desaturate");
    }
    clearInterval(this.intervalo);
    (<HTMLDivElement>document.getElementById("title-mayan")).style.display = "none";
    (<HTMLLabelElement>document.getElementById("minutes")).textContent = "00";
    (<HTMLLabelElement>document.getElementById("seconds")).textContent = "00";
    (<HTMLLabelElement>document.getElementById("error")).textContent = "0";
    (<HTMLLabelElement>document.getElementById("correct")).textContent = "0";
    (<HTMLDivElement>document.getElementById("chooseDifficults")).style.display = "none";
    var maindiv = document.getElementById("boardgame");
    (<HTMLDivElement>document.getElementById("game")).style.display = "flex";
    let moves = 0;
    (<HTMLDivElement>maindiv).style.display = "";
    while ((<HTMLDivElement>maindiv).firstChild) {
      (<HTMLDivElement>maindiv).removeChild((<any>maindiv).lastChild);
    }
  }

  public start() {
    this.startDivGame(1);
    let max = 16;
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

      div.addEventListener('click', (event) => {
        const element = (<HTMLDivElement>event.currentTarget);
        this.comprobation(element, max);
      })
    }
  }

  public start2() {
    this.startDivGame(2);
    let max = 16;
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
        div.setAttribute('card', (c - 1) + "");
        card_back.appendChild(h1);
      } else {
        var image = document.createElement('img');
        const randomImg = "../../assets/imgs/Kin/" + c + ".png";
        image.setAttribute('src', randomImg);
        div.setAttribute('card', (c - 1) + "");
        card_back.appendChild(image);
      }
      row.appendChild(div);
      if (i % 4 == 0) {
        (<HTMLDivElement>document.getElementById('boardgame')).append(row);
        row = document.createElement('div');
      }

      div.addEventListener('click', (event) => {
        const element = (<HTMLDivElement>event.currentTarget);
        this.comprobation(element, max);
      })
    }
  }

  public start3() {
    this.startDivGame(3);
    let max = 16;
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
        h1.textContent = c + "";
        div.setAttribute('card', (c - 1) + "");
        card_back.appendChild(h1);
      } else {
        var image = document.createElement('img');
        const randomImg = "../../assets/imgs/Kin/" + c + ".png";
        image.setAttribute('src', randomImg);
        div.setAttribute('card', (c - 1) + "");
        card_back.appendChild(image);
      }
      row.appendChild(div);
      if (i % 4 == 0) {
        (<HTMLDivElement>document.getElementById('boardgame')).append(row)
        row = document.createElement('div');
      }

      div.addEventListener('click', (event) => {
        const element = (<HTMLDivElement>event.currentTarget);
        this.comprobation(element, max);
      })
    }

  }

  public start4() {
    this.startDivGame(4);
    let max = 16;
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
        h1.textContent = c + "";
        div.setAttribute('card', (c - 1) + "");
        card_back.appendChild(h1);
      } else {
        var h1 = document.createElement('h1');
        h1.textContent = this.availableNames[c - 1].toUpperCase();
        div.setAttribute('card', (c - 1) + "");
        card_back.appendChild(h1);
      }
      row.appendChild(div);
      if (i % 4 == 0) {
        (<HTMLDivElement>document.getElementById('boardgame')).append(row)
        row = document.createElement('div')
      }

      div.addEventListener('click', (event) => {
        const element = (<HTMLDivElement>event.currentTarget);
        this.comprobation(element, max);
      })
    }

  }


  public comprobation(element: any, max: any) {
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
            (<HTMLDivElement>document.getElementById("win")).style.display = "flex";
            this.winAudio.play();
            let min = (<HTMLLabelElement>document.getElementById("minutes")).textContent;
            let sec = (<HTMLLabelElement>document.getElementById("seconds")).textContent;
            let err = (<HTMLLabelElement>document.getElementById("error")).textContent;
            let cor = (<HTMLLabelElement>document.getElementById("correct")).textContent;
            let minutes = parseInt(min as string);
            let seconds = parseInt(sec as string);
            let errors = parseInt(err as string);
            let correct = parseInt(cor as string);
            seconds += minutes * 60;
            let time_perfect = 1000;
            errors = Math.pow(correct, 1 / errors);
            time_perfect = Math.floor(time_perfect - (errors * seconds * 1.25));
            (<HTMLSpanElement>document.getElementById("points")).textContent = time_perfect + "";
            this.availableImages = ['imix', 'ik', 'akbal', 'kan', 'chikchan', 'kimi', 'manik', 'lamat', 'muluk', 'ok', 'chuen', 'eb', 'ben', 'ix', 'men', 'kib', 'kaban', 'etznab', 'kauak', 'ajau'];
            this.availableImages2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
            this.availableNames = ['imix', 'ik\'', 'ak\'bal', 'k\'an', 'chikchan', 'kimi', 'manik', 'lamat', 'muluk', 'ok', 'chuen', 'eb', 'ben', 'ix', 'men', 'k\'ib', 'kaban', 'etznab', 'kauak', 'ajau'];
            clearInterval(this.intervalo);
            let dificultad = (<HTMLDivElement>document.querySelector("#difficultActualGame")).getAttribute("dificultad");
            let juego:Juego = new Juego(-1,this.cookies.get("usuario"),time_perfect,("00:"+min+":"+sec),parseInt(err as string),parseInt(dificultad as string),new Date().toLocaleString());
            this.servicioJuego.guardar(juego).subscribe();
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

  public verPuntajes(){
    this.router.navigateByUrl("/memoria");
  }

  public updateJuegosGlobales(){
    this.servicioJuego.obtenerJuegosDificultad(this.dificultad).subscribe(data=>{
      this.juegosGlobales = data;
    });
  }

  minutesLabel = document.getElementById("minutes");
  secondsLabel = document.getElementById("seconds");
  totalSeconds = 0;
  time_stopped = true;
  intervalo: any;

  public setTime() {
    var number_count: any = parseInt((<HTMLInputElement>document.getElementById("count")).value) + 1;
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
    var text_number: any = (<HTMLDivElement>document.getElementById("correct")).textContent;
    var number = parseInt(text_number) + 1;
    (<HTMLDivElement>document.getElementById("correct")).textContent = number + "";
    this.audio.play();
  }

  public addError() {
    var text_number: any = (<HTMLDivElement>document.getElementById("error")).textContent;
    var number = parseInt(text_number) + 1;
    (<HTMLDivElement>document.getElementById("error")).textContent = number + "";
  }
}
