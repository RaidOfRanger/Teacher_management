import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../Model/register'
import { ApicallService } from '../../service/apicall.service'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerdata = new RegisterService("", "","", "")
  errorget: ""
  check_errorget = false


  constructor(private apicall: ApicallService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

  }

  register_data(data: RegisterService) {

    console.log(data)
    const call = this.apicall.register(data).subscribe((result) => {
      console.log("inside register call", result)
      this.router.navigate(['teacher'])
      console.log(result)
      const store_token = localStorage.setItem("token",result)
      
    
    }, error => {
      this.errorget = error.error.message
      console.log("mmm", this.errorget)
      window.alert(this.errorget)
      if (this.errorget != "") {
        this.check_errorget = true
      }
    })
  }
}
