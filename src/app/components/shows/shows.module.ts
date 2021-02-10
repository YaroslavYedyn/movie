import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowsComponent} from './components/shows/shows.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '', component: ShowsComponent
  }
];

@NgModule({
  declarations: [ShowsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ShowsModule {
}
