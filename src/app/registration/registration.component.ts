import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm:FormGroup;
  constructor(private _fb:FormBuilder, private _http:HttpClient, private _router:Router) { }

  ngOnInit(): void {

    this.registrationForm=this._fb.group({
      name:['',Validators.required],
      number:['',Validators.required ],
      emailid:['',Validators.required],
      password:['',Validators.required],
    })
  }

  registration(){
      this._http.post<any>("http://localhost:3000/signup", this.registrationForm.value).subscribe(res=>{
        alert("Registration Successful")
        this.registrationForm.reset();
        this._router.navigate(['login'])
      }
      ), err=>{
        console.log("something has gone wrong")
  }
  }
}
