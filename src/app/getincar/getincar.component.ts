import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-getincar',
  templateUrl: './getincar.component.html',
  styleUrls: ['./getincar.component.css']
})
export class GetincarComponent implements OnInit {

  constructor(private router: Router ) { 
    
  }
  slowAlert(){
    alert( "this is the wrong choice, you will be sent to the correct answer" );
  }
   
 ngOnInit()
 { setTimeout(function () {
  window.location.href = "http://localhost:4200/duringcar"; //will redirect to your blog page (an ex: blog.html)
}, 10000); 

 
 { this.slowAlert()}
{ var snd1  = new Audio();
    var src1  = document.createElement("source");
    src1.type = "audio/mp3";
    src1.src  = "audio/../../assets/amycar.mp3";
    snd1.appendChild(src1);
    
    var snd2  = new Audio();
    var src2  = document.createElement("source");
    src2.type = "audio/wav";
    src2.src  = "audio/../../assets/cardooropen.wav";
    snd2.appendChild(src2);
    
    snd1.play(); snd2.play(); window.stop()} }}