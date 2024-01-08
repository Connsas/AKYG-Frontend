import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TitleService } from '../../services/title.service';
import { Title } from '../../models/title';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, FilterPipe],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit{
  titles:string[];
  filterText:string;

  constructor(private titleService:TitleService){}

  ngOnInit(): void {
    this.getTitles();
  }

  getTitles(){
    this.titleService.getTitles().subscribe((response) =>{
      this.titles = response.titles
    })
  }
}
