import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atpool',
  templateUrl: './atpool.component.html',
  styleUrls: ['./atpool.component.css']
})
export class AtpoolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var snd1  = new Audio();
    var src1  = document.createElement("source");
    src1.type = "audio/mp3";
    src1.src  = "audio/../../assets/atpool.mp3";
    snd1.appendChild(src1);
    
    
    
    snd1.play();  }

}
