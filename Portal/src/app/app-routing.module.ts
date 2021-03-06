import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
