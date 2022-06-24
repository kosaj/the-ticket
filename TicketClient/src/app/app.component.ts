import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { take } from "rxjs";

@Component({
  selector: "app-root",
  template: `
    <app-page-header></app-page-header>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {}
