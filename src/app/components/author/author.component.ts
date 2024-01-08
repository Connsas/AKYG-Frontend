import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Author } from '../../models/author';
import { AuthorService } from '../../services/author.service';
import { FilterPipe } from '../../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, FilterPipe],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent implements OnInit{
  authors:Author;
  filterText:string;

  constructor(private authorService:AuthorService){}

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors(){
    return this.authorService.getAuthors().subscribe((response) =>{
      this.authors = response;
    })
  }
}
