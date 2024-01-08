import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Poem } from '../../models/poem';
import { PoemService } from '../../services/poem.service';

@Component({
  selector: 'app-poem',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './poem.component.html',
  styleUrl: './poem.component.css'
})
export class PoemComponent implements OnInit{
  poemList:string[];
  poem:Poem;


  constructor(private poemService:PoemService, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params =>{
      this.getPoem(params['poemName']);
    }))
  }

  getPoem(poemName:string){
    return this.poemService.getPoem(poemName).subscribe((response) =>{
      this.poem = response[0];
    })
  }
}
