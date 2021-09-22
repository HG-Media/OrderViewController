import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderViewService {

  constructor(private http:HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  getSerialNumber():Observable<any[]>{
    return this.http.get<any>(this.baseUrl+"taskType")
  }
 
  addTask(val:any){
    return this.http.post(this.baseUrl+ "task", val ,{responseType:"text"})
  }
}
