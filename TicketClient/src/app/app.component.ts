import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { take } from "rxjs";

@Component({
  selector: "app-root",
  template: `
    <mat-toolbar>
      <span>Ticket-Machine</span>
      <span class="horizontal-space"></span>
      <button mat-icon-button (click)="login('guest', 'guest')">
        <mat-icon>login</mat-icon>
      </button>
      <button mat-icon-button>
        <mat-icon>logout</mat-icon>
      </button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      .horizontal-space {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class AppComponent {
  constructor(private readonly httpClient: HttpClient) {}

  login(name: string, password: string): void {
    this.httpClient
      .post("/api/auth/login", {
        username: name,
        password: password,
      })
      .pipe(take(1))
      .subscribe();
  }
}
