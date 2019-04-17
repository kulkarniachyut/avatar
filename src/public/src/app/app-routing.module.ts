import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router} from '@angular/router';

import { DashboardComponent } from './components/Landing/dashboard/dashboard.component';
import { AvatarDetailsComponent } from './components/Details/avatar-details/avatar-details.component';
import { HomeLandingComponent } from './components/home-landing/home-landing.component';
const routes = [
  // Landing Page
  {path: 'avatarDetails', component: AvatarDetailsComponent},

  {path: 'dashBoard', component: DashboardComponent},
  {path: '', component: HomeLandingComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
