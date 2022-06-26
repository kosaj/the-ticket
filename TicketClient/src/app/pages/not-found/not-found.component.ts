import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

@Component({
  selector: "app-not-found",
  template: ` <p>not-found works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}

const routes: Routes = [{ path: "", component: NotFoundComponent }];

@NgModule({
  declarations: [NotFoundComponent],
  imports: [RouterModule.forChild(routes)],
})
export class NotFoundModule {}
