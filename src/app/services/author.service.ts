import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }

  apiUrl:string = "http://localhost:6770/author";

  getAuthors(): Observable<Author>{
    return this.http.get<Author>(this.apiUrl);
  }
}
