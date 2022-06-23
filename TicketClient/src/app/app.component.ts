import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { take } from "rxjs";

@Component({
  selector: "app-root",
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <button (click)="something()">API SOMETHING</button>
    <button (click)="login('guest', 'guest')">API LOGIN</button>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = "TicketClient";

  constructor(private readonly httpClient: HttpClient) {}

  something(): void {
    this.httpClient.get("/api/simple/something").pipe(take(1)).subscribe();
  }

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
