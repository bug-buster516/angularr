import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {ViewpageComponent} from './viewpage/viewpage.component';
const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{path:'login', component:LoginpageComponent},
{path:'viewdata', component: ViewpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
