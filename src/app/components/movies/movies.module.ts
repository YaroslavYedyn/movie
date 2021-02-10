import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesComponent} from './components/movies/movies.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '', component: MoviesComponent
  }
];

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MoviesModule {
}
