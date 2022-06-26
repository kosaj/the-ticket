import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PageHeaderModule } from "./components/page-header/page-header.component";
import { HttpClientModule } from "@angular/common/http";
import { JwtModule } from "@auth0/angular-jwt";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    //
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem("access_token"),
        allowedDomains: ["localhost:7000"],
      },
    }),

    //
    PageHeaderModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
