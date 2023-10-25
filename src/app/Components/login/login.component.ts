import { Component, OnInit } from '@angular/core';
import { loginService } from "../../Model/login"
import { ApicallService } from '../../service/apicall.service'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logindata = new loginService("","")

  constructor(private apicall: ApicallService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  checklogin(data: loginService){
    console.log(data)

    this.apicall.login(data).subscribe(result =>{
      this.router.navigate([''])
    })

  }



}
