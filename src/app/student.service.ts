import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = "http://localhost:3000/profile"
  constructor(private http: HttpClient) { }
  getAllInfo(): Observable<any> {
    return this.http.get(this.url)
  }

  SaveInfo(data: any) {
    console.log(data)
    return this.http.post(this.url, data);
  } 
   
}
