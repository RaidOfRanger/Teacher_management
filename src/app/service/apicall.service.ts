import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  url ='http://localhost:3000/teacher'
  constructor(private http : HttpClient) { }

  addTeacher(data: any){
    return this.http.post(this.url +'/add',data)
  }

  register(data: any): Observable<any>{
    return this.http.post(this.url + "/register",data ,{withCredentials: true})
    
  }

  login(data: any){
    return this.http.post(this.url + "/login",data,{withCredentials: true})
  }

  fetchall(){
    return this.http.get(this.url + "/fetchall",{withCredentials: true})
  }

  
}
