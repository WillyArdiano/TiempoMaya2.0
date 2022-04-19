import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tiempomaya';
  showMemory = true;
  showCalc = false;

  public toggle(num: number) {
    if (num == 0) {
      (<HTMLDivElement>document.getElementById("calc")).style.display = "none";
      (<HTMLDivElement>document.getElementById("memory")).style.display = "";
    } else if (num == 1) {
      (<HTMLDivElement>document.getElementById("calc")).style.display = "";
      (<HTMLDivElement>document.getElementById("memory")).style.display = "none";
    }

    const interval_id = window.setInterval(function () { }, Number.MAX_SAFE_INTEGER);

    // Clear any timeout/interval up to that id
    for (let i = 1; i < interval_id; i++) {
      window.clearInterval(i);
    }
  }
}
