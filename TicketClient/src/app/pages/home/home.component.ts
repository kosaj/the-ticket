import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
} from "@angular/core";

@Component({
  selector: "app-home",
  template: ` <p>home works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
