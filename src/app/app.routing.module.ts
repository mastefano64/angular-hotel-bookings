import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageSchedulerComponent } from './components/page-scheduler/page-scheduler.component';

const routes: Routes = [
  { path: '', redirectTo: 'page1', pathMatch: 'full' },
  { path: 'page1', component: PageSchedulerComponent },
  { path: '**', redirectTo: 'page1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
