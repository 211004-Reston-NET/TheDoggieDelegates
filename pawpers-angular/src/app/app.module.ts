import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TopicPageComponent } from './topic-page/topic-page.component';
import { ReplyPageComponent } from './reply-page/reply-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { DogSearchComponent } from './dog-search/dog-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    ProfilePageComponent,
    AuthButtonComponent, 
    UserProfileComponent, TopicPageComponent, ReplyPageComponent, FavoritesPageComponent, DogSearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: FrontPageComponent},
      { path: 'profile-page', component: ProfilePageComponent},
      { path: 'favorites-page', component: FavoritesPageComponent},
      { path: 'topic-page', component: TopicPageComponent},
      { path: 'reply-page', component: ReplyPageComponent},
      { path: '**', component:FrontPageComponent}
    ]),
    AuthModule.forRoot({
      domain: 'dev-tc6s9x9t.us.auth0.com',
      clientId: 'xRoxK7dHIK8DecyAzJsMlTfUEcLH9mdC'
    })
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
