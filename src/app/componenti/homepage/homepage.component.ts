import {Component,OnInit} from "@angular/core";
declare let data:any;

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})

export class HomepageComponent implements OnInit {
  dati:any = [];
  nomifile:string[] = [];

  constructor(){}

  ngOnInit(): void {
    this.dati = data;

    for (let i = 0; i < this.dati.length; i++) {
      this.nomifile[i] = "assets/sounds/" + this.dati[i].name + ".webm";
    }
  }

  esegui(i:number){
    const audio = new Audio();
    audio.src = this.nomifile[i];
    audio.load();
    audio.play();
  }
}
