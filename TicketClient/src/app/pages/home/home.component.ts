import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  OnInit,
} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

@Component({
  selector: "app-home",
  template: ` <p>home works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}

const routes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forChild(routes)],
})
export class HomeModule {}
