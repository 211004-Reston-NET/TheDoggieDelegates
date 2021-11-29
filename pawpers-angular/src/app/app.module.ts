import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [AppComponent, AuthButtonComponent, UserProfileComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: '**', component:AppComponent}]),
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-tc6s9x9t.us.auth0.com',
      clientId: 'xRoxK7dHIK8DecyAzJsMlTfUEcLH9mdC'
    }),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}