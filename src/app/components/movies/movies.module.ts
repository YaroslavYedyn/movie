import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesComponent} from './components/movies/movies.component';
import {RouterModule, Routes} from '@angular/router';
import {CardComponent} from './components/card/card.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [
  {
    path: '', component: MoviesComponent
  },
  {
    path: 'details/:id', loadChildren: () => import('../../components/details/details.module').then((m) => m.DetailsModule)
  }

];

@NgModule({
  declarations: [MoviesComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule,
    ReactiveFormsModule,
  ]
})
export class MoviesModule {
}
