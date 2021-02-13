import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowsComponent} from './components/shows/shows.component';
import {RouterModule, Routes} from '@angular/router';
import { CardComponent } from './components/card/card.component';
import {AppModule} from '../../app.module';
import {ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [
  {
    path: '', component: ShowsComponent
  },
  {
    path: 'details/:id', loadChildren: () => import('../../components/details/details.module').then((m) => m.DetailsModule)
  }
];

@NgModule({
  declarations: [ShowsComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class ShowsModule {
}
