import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-profile',
  template: `
    <strong *ngIf="auth.user$ | async as user">
      {{ user.name }} 
    </strong>
    <div class="row" *ngIf="profileJson">
      <pre class="col-12 text-light bg-dark p-4">
        {{ profileJson }}
      </pre>
    </div>`
})
export class UserProfileComponent implements OnInit {
  profileJson: string = null;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    );
  }
}