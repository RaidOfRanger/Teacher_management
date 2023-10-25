import { Component, OnInit } from '@angular/core';
import { addteacher } from '../../Model/addteacher';
import {ApicallService} from '../../service/apicall.service'

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  constructor(private apicall: ApicallService) { 
    
  }

  ngOnInit(): void {
  }

  addT = new addteacher("","","","",1,"","");

  onSubmit(data: any){
    console.log(data);

  this.apicall.addTeacher(data).subscribe((result) => {
    console.log("inside addteacher call")
  })
  }
 
}
