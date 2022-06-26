import { Component, ChangeDetectionStrategy, NgModule } from "@angular/core";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { HttpClient } from "@angular/common/http";
import { take } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-page-header",
  template: `<mat-toolbar>
    <span>Ticket-Machine</span>
    <span class="horizontal-space"></span>
    <button mat-icon-button (click)="login('guest', 'guest')">
      <mat-icon>login</mat-icon>
    </button>
    <button mat-icon-button>
      <mat-icon>logout</mat-icon>
    </button>
  </mat-toolbar>`,
  styles: [
    `
      .horizontal-space {
        flex: 1 1 auto;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent {
  constructor(
    private readonly httpClient: HttpClient,
    public readonly jwtHelper: JwtHelperService
  ) {}

  login(name: string, password: string): void {
    this.httpClient
      .post("/api/auth/login", {
        username: name,
        password: password,
      })
      .pipe(take(1))
      .subscribe();
  }

  test() {
    const token = this.jwtHelper.tokenGetter();

    console.log(this.jwtHelper.isTokenExpired()); // true or false
    console.log(this.jwtHelper.getTokenExpirationDate()); // date
    console.log(this.jwtHelper.decodeToken(token)); // token
  }
}

@NgModule({
  declarations: [PageHeaderComponent],
  exports: [PageHeaderComponent],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class PageHeaderModule {}
