import { CommonModule } from "@angular/common";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatButton, MatButtonModule } from "@angular/material/button";
import { RouterModule, Routes } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  template: `
    <form [formGroup]="formGroup" (submit)="login()">
      <button mat-button type="submit">Confirm</button>
    </form>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  readonly formGroup = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  constructor(private readonly authService: AuthService) {}

  login() {
    if (!this.formGroup || !this.formGroup.valid) {
      return;
    }

    const username = this.formGroup.controls["username"].value;
    const password = this.formGroup.controls["password"].value;

    this.authService.login(username, password);
  }
}

const routes: Routes = [{ path: "", component: LoginComponent }];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatButtonModule,
  ],
})
export class LoginModule {}
