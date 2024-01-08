import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from './components/navi/navi.component';
import { PoemComponent } from './components/poem/poem.component';
import { AuthorComponent } from './components/author/author.component';
import { TitleComponent } from './components/title/title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NaviComponent, PoemComponent, AuthorComponent, TitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AKYG';
}
