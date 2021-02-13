import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

import {AuthGuard} from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'details/:id', loadChildren: () => import('./components/details/details.module').then((m) => m.DetailsModule)
  },
  {
    path: 'shows', loadChildren: () => import('./components/shows/shows.module').then((m) => m.ShowsModule)
  },
  {
    path: 'movies', loadChildren: () => import('./components/movies/movies.module').then((m) => m.MoviesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'latest', loadChildren: () => import('./components/latest/latest.module').then((m) => m.LatestModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
