import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LatestComponent} from './components/latest/latest.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '', component: LatestComponent
  }
];

@NgModule({
  declarations: [LatestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LatestModule {
}
