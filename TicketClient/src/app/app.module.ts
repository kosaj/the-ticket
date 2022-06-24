import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { NotFoundModule } from "./pages/not-found/not-found.component";
import { HomeModule } from "./pages/home/home.component";
import {
  PageHeaderComponent,
  PageHeaderModule,
} from "./components/page-header/page-header.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    //
    HomeModule,
    NotFoundModule,

    //
    PageHeaderModule,

    //
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
