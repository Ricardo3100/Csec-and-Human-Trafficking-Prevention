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
 
  ngOnInit(){  
    
    setTimeout(function() {
      window.location.href = "http://localhost:4200/duringcar";
    }, 8000); 

  }
}
