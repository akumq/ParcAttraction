import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) { }

  public getData(url: string) {
    let data = this.http.get(url);
    return data;
  }

  public getDataHeader(url: string, token: string) {
    let data = this.http.get(url, {
      headers: { 
        'user': token
      }
    });
    return data;
  }

  public postData(url: string, data: any) {
    let result = this.http.post(url, data);
    return result;
  }

  public deleteData(url: string) {
    let result = this.http.delete(url);
    return result;
  }
}