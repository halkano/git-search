import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import { UserComponent } from '../user/user.component';
import { LandingpageComponent } from '../landingpage/landingpage.component';




// Defining routes
const routes:Routes=[
  {path:"",component: LandingpageComponent},
  {path:"user",component:UserComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
