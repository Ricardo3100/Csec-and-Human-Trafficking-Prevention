import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public contact={
entername:'',
enteremail:'',
phonenumber:''};
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }
submit (){
this.http.post('http://localhost:8080/sendemail', this.contact)
  .subscribe( (response:any) =>{
    console.log(response);}
    , (error)=> {console.log(error);}
)
}
}
