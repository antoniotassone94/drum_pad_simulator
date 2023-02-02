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
  record:number[] = [];
  recordExists:boolean = false;
  newRecordVariable:boolean = false;

  constructor(){}

  ngOnInit(): void {
    this.dati = data;

    for (let i = 0; i < this.dati.length; i++) {
      this.nomifile[i] = "assets/sounds/" + this.dati[i].name + ".webm";
    }
  }

  playButtonKeyboard(i:number){
    const audio = new Audio();
    audio.src = this.nomifile[i];
    audio.load();
    audio.play();
    if(this.newRecordVariable){
      this.record.push(i);
    }
  }

  newRecord(){
    if(!this.newRecordVariable){
      this.newRecordVariable = true;
    }
  }

  stopRecord(){
    if(this.newRecordVariable){
      this.newRecordVariable = false;
      this.recordExists = true;
    }
  }

  playRecord(){
    if(!this.newRecordVariable && this.recordExists){
      this.record.forEach(instrumental => {
        this.playButtonKeyboard(instrumental);
      });
    }
  }

  deleteRecord(){
    if(!this.newRecordVariable && this.recordExists){
      this.record.splice(0,this.record.length);
      this.recordExists = false;
    }
  }
}
