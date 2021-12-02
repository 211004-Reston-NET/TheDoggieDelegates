import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth-button',
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button (click)="auth.logout({ returnTo: document.location.origin })">
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button class="btn btn-primary" (click)="auth.loginWithRedirect()">Log in</button>
    </ng-template>
  `,
  styles: [],
})
export class AuthButtonComponent {
  
  static userEmail: string | undefined = "";
  userInfo:any[] = [];

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {
    
    this.auth.user$.subscribe((response) => {
      AuthButtonComponent.userEmail = response?.email;
      
      //console.log(AuthButtonComponent.userEmail)
    })
    // console.log(AuthButtonComponent.userEmail)
  }

  ngOnInit(): void {
    
  }
}