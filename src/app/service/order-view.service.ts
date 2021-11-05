import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderViewService {

  constructor(private http:HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  getService():Observable<any[]>{
    return this.http.get<any>(this.baseUrl + "service")
  }
 
  // submit(val:any){
  //   return this.http.post(this.baseUrl+ "Order", val ,{responseType:"text"})
  // }
  submit(val:any){
    return this.http.post(this.baseUrl+ "task/upload-image-thumb", val ,{responseType:"text"})
  }
}
