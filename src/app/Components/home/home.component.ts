import { Component, OnInit } from '@angular/core';
import { loginService } from "../../Model/login"
import { ApicallService } from '../../service/apicall.service'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { addteacher } from '../../Model/addteacher';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  displayedColumns: string[] = ['Name', 'Surname', 'Gender', 'Experience','subject'];
  teacher_data: any;

  constructor(private apicall: ApicallService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchall()
  }

  fetchall(){
    this.apicall.fetchall().subscribe((result) =>{
      this.teacher_data = result
      console.log(result)
      
    },err =>{
      this.router.navigate(['login'])
    })
  }

}
