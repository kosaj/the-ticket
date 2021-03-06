import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.component").then((m) => m.HomeModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.component").then((m) => m.LoginModule),
  },
  {
    path: "404",
    loadChildren: () =>
      import("./pages/not-found/not-found.component").then(
        (m) => m.NotFoundModule
      ),
  },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "404", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
