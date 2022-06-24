import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
} from "@angular/core";

@Component({
  selector: "app-not-found",
  template: ` <p>not-found works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}

@NgModule({
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent],
})
export class NotFoundModule {}
