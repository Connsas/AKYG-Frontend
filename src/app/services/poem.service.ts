import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PoemList } from '../models/poemList';

@Injectable({
  providedIn: 'root'
})
export class PoemService {

  constructor(private http:HttpClient) { }

  apiUrl:string = "http://localhost:6770/title/poem/";

  getPoem(poemName:string): Observable<PoemList>{
    let currentUrl:string = this.apiUrl + poemName;
    return this.http.get<PoemList>(currentUrl);
  }
}
