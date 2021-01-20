import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Constants} from "../config/constants";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  base_url = Constants.API_ENDPOINT;

  constructor(private http:HttpClient) { }

  getAll():Observable<any> {
    return this.http.get(this.base_url);
  }

  getUser(id:number):Observable<any>{
    return this.http.get(`${this.base_url}/${id}`);
  }
}