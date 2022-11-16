import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _router:Router, private _http:HttpClient, private _authService:AuthService) { }
  BASE_URL=environment.Base_URL;
  users:any=[];
  ngOnInit(): void {

  }

  getUsers(){
    this._http.get<any>(this.BASE_URL + "signup").subscribe(res=>{
      this.users=res
      debugger
    })
  }

  delete(id:number){
    debugger
    this._http.post(this.BASE_URL + "signup/Delete",id).subscribe(res=>{
      alert("deleted Successfully")
    })
  }

 

  logout(){
    this._router.navigate(['login']);
  }

  

}
