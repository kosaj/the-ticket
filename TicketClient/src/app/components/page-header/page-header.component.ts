import { HttpClient } from "@angular/common/http";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
} from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { take } from "rxjs";

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
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent {
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

@NgModule({
  declarations: [PageHeaderComponent],
  exports: [PageHeaderComponent],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class PageHeaderModule {}
