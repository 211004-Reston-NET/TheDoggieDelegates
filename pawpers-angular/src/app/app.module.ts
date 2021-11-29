import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { Auth0LoginComponent } from './auth0-login/auth0-login.component';

@NgModule({
  declarations: [AppComponent, Auth0LoginComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: '', component:FrontPageComponent}]),
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-tc6s9x9t.us.auth0.com',
      clientId: 'xRoxK7dHIK8DecyAzJsMlTfUEcLH9mdC'
    }),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}