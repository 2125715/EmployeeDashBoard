import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ViewdashboardComponent } from './viewdashboard/viewdashboard.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'view',component:ViewdashboardComponent},
  {path:'addemployee',component:AddemployeeComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
