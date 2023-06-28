import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}  from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class server {
  ServerUrls: any;
  constructor(private http:HttpClient) {
  }
  getJonsurl(){

    this.http.get('../../assets/url.json', { responseType: 'json' })

      .subscribe((data:any)=>{

       console.log('data'+JSON.stringify(data));

       if(data && data.serverEndPoint){
        console.log('urls'+ data.serverEndPoint);
        this.ServerUrls =data.serverEndPoint;

       }
      });

  }
}