import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { HomePageComponent } from '../app/home-page/home-page.component';

const routes: Routes = [
  {path: 'home', component:HomePageComponent},
  {path: '', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
