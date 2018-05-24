import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duringcar',
  templateUrl: './duringcar.component.html',
  styleUrls: ['./duringcar.component.css']
})
export class DuringcarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
    
    var snd2  = new Audio();
    var src2  = document.createElement("source");
    src2.type = "audio/mp3";
    src2.src  = "audio/../../assets/amyran.mp3";
    snd2.appendChild(src2);
    
    snd2.play(); }}
