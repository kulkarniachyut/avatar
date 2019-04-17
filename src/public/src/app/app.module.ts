import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/Landing/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AvatarViewComponent } from './components/Landing/avatar-view/avatar-view.component';
import { NavBarComponent } from './components/Global/nav-bar/nav-bar.component';
import { AvatarDetailsComponent } from './components/Details/avatar-details/avatar-details.component';
import { AvatarSectionComponent } from './components/Details/avatar-section/avatar-section.component';
import { PointsSectionComponent } from './components/Details/points-section/points-section.component';
import { CommunitySectionComponent } from './components/Details/community-section/community-section.component';
import { BuySectionComponent } from './components/Details/buy-section/buy-section.component';
import { RateSectionComponent } from './components/Details/rate-section/rate-section.component';
import { PostsComponent } from './components/Details/community-section/posts/posts.component';
import { HomeLandingComponent } from './components/home-landing/home-landing.component';
import { EBayChoiceComponent } from './components/Details/community-section/e-bay-choice/e-bay-choice.component';
import { CommunityChoiceComponent } from './components/Details/community-section/community-choice/community-choice.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AvatarViewComponent,
    NavBarComponent,
    AvatarDetailsComponent,
    AvatarSectionComponent,
    PointsSectionComponent,
    CommunitySectionComponent,
    BuySectionComponent,
    RateSectionComponent,
    PostsComponent,
    HomeLandingComponent,
    EBayChoiceComponent,
    CommunityChoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     // Material Design
     BrowserAnimationsModule,
     MatInputModule,
     MatSidenavModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatFormFieldModule,
     MatTabsModule,
     MatSelectModule,
     MatRadioModule,
     // Forms
     FormsModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
