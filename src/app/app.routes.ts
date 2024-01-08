import { Routes } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { PoemComponent } from './components/poem/poem.component';
import { TitleComponent } from './components/title/title.component';
import { MainPageComponent } from './components/main-page/main-page.component';

export const routes: Routes = [
    {path:"", component:MainPageComponent},
    {path:"authors", component:AuthorComponent},
    {path:"titles/poem/:poemName", component:PoemComponent},
    {path:"titles", component:TitleComponent}
];
