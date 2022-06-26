import { Component, ChangeDetectionStrategy, NgModule } from "@angular/core";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-page-header",
  template: `<mat-toolbar>
    <span>Ticket-Machine</span>
    <span class="horizontal-space"></span>
    <button mat-icon-button (click)="authService.login('guest', 'guest')">
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
  constructor(public readonly authService: AuthService) {}
}

@NgModule({
  declarations: [PageHeaderComponent],
  exports: [PageHeaderComponent],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class PageHeaderModule {}
