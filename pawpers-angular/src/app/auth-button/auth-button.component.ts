import { Component, Inject } from '@angular/core';
import { Auth0ClientService, AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

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
  profileToken: string = ""
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {
  }

  ngOnInit(): void {
  }
}