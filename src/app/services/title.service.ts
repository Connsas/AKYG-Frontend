import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Title } from '../models/title';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private http:HttpClient) { }

  apiUrl:string = "http://localhost:6770/title";

  getTitles(): Observable<Title>{
    return this.http.get<Title>(this.apiUrl);
  }
}
