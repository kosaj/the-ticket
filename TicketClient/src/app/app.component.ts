import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-page-header></app-page-header>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {}
