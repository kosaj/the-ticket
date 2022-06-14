import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { take } from "rxjs";

@Component({
  selector: "app-root",
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <button (click)="ping()">SEND API PING</button>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = "TicketClient";

  constructor(private readonly httpClient: HttpClient) {}

  ping(): void {
    this.httpClient.get("api").pipe(take(1)).subscribe();
    this.httpClient.get("/api").pipe(take(1)).subscribe();
    this.httpClient.get("/api/").pipe(take(1)).subscribe();
  }
}
