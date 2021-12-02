import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Auth0
import { AuthGuard, AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';

// HttpClient - external api
import { HttpClientModule } from '@angular/common/http';

// Forms
import { FormsModule }   from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TopicPageComponent } from './topic-page/topic-page.component';
import { ReplyPageComponent } from './reply-page/reply-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { DogSearchComponent } from './dog-search/dog-search.component';
import { DogViewComponent } from './dog-view/dog-view.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { AddtopicComponent } from './addtopic/addtopic.component';

import {ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    ProfilePageComponent,
    AuthButtonComponent, 
    DogViewComponent,
    UserProfileComponent, 
    TopicPageComponent, 
    ReplyPageComponent, 
    FavoritesPageComponent,
    DogSearchComponent, 
    NavbarComponent, 
    AddProfileComponent,
    AddtopicComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: FrontPageComponent},
      { path: 'profile-page', component: ProfilePageComponent},
      { path: 'add-profile', component: AddProfileComponent},
      { path: 'favorites-page', component: FavoritesPageComponent},
      { path: 'topic-page', component: TopicPageComponent},
      { path: 'reply-page', component: ReplyPageComponent},
      { path: 'dogsearch-page', component: DogSearchComponent},
      { path: 'dogview-page', component: DogViewComponent},
      { path: 'addtopic', component: AddtopicComponent},
      { path: 'dogview-page/:id', component: DogViewComponent},
      { path: '**', component:FrontPageComponent},
    ]),
    AuthModule.forRoot({
      domain: 'dev-tc6s9x9t.us.auth0.com',
      clientId: 'xRoxK7dHIK8DecyAzJsMlTfUEcLH9mdC'
    })
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
