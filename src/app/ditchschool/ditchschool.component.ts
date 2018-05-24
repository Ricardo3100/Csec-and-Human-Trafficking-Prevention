import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-ditchschool',
  templateUrl: './ditchschool.component.html',
  styleUrls: ['./ditchschool.component.css']
})
export class DitchschoolComponent implements OnInit {

  constructor() { }
  slowAlert(){
    alert( "this is the wrong choice, you will be sent to the correct answer" );
  }
  ngOnInit() 
  {setTimeout(function () {
    window.location.href = "http://localhost:4200/atpool"; //will redirect to your blog page (an ex: blog.html)
  }, 9000); window.stop();
  
  { this.slowAlert()}}
}
