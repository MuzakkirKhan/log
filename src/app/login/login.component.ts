import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginform:FormGroup
BASE_URL=environment.Base_URL;

  constructor(private _fb:FormBuilder, private _hhtpClient:HttpClient, 
    private authService:AuthService, private _authService:AuthService) { }

  ngOnInit(): void {
this.setForm();
this._authService.logout();
  }
  
  setForm(){
    this.loginform=this._fb.group({
      emailid:['', Validators.email],
      password:['',Validators.required],
    })
  }

  

  login(){
  this._hhtpClient.get<any>(this.BASE_URL + "signup").subscribe(res=>{
    const user = res.find((x:any)=>{
      return x.emailid === this.loginform.value.emailid && x.password === this.loginform.value.password
    })
    if(user){
      alert("login Successful");
      this.authService.login(user);
      debugger
      this.loginform.reset();
    } else{
      alert("User not found");
      this.loginform.reset();
    }
  }, err=>{
    alert("Something went wrong");
  })

 }
}

