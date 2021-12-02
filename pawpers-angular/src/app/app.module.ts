import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// Auth0
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';

// HttpClient - external api


// Components
import { FrontPageComponent } from './front-page/front-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TopicPageComponent } from './topic-page/topic-page.component';
import { ReplyPageComponent } from './reply-page/reply-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { DogSearchComponent } from './dog-search/dog-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DogViewComponent } from './dog-view/dog-view.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    ProfilePageComponent,
    AuthButtonComponent, 
    DogViewComponent
    UserProfileComponent, 
    TopicPageComponent, 
    ReplyPageComponent, 
    FavoritesPageComponent,
    DogSearchComponent, 
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: FrontPageComponent},
      { path: 'profile-page', component: ProfilePageComponent},
      { path: 'favorites-page', component: FavoritesPageComponent},
      { path: 'topic-page', component: TopicPageComponent},
      { path: 'reply-page', component: ReplyPageComponent},
      { path: 'dogsearch-page', component: DogSearchComponent},
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
