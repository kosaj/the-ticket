import { CommonModule } from "@angular/common";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
} from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatButton, MatButtonModule } from "@angular/material/button";
import { RouterModule, Routes } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-login",
  template: `
    <form [formGroup]="formGroup" (submit)="login()">
      <mat-form-field appearance="fill">
        <input
          type="text"
          matInput
          [formControl]="usernameFormControl"
          placeholder="Username"
        />
        <mat-error *ngIf="usernameFormControl.hasError('required')">
          Username is <strong>required</strong>
        </mat-error>
      </mat-form-field>

      <mat-form-field appearance="fill">
        <input
          type="password"
          matInput
          [formControl]="passwordFormControl"
          placeholder="Password"
        />
        <mat-error *ngIf="passwordFormControl.hasError('required')">
          Password is <strong>required</strong>
        </mat-error>
      </mat-form-field>
      <button mat-button type="submit">Confirm</button>
    </form>
  `,
  styles: [
    `
      form {
        display: flex;
        flex-direction: column;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  readonly formGroup = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  readonly usernameFormControl: FormControl = <FormControl>(
    this.formGroup.controls["username"]
  );

  readonly passwordFormControl: FormControl = <FormControl>(
    this.formGroup.controls["password"]
  );

  constructor(private readonly authService: AuthService) {}

  login() {
    if (!this.formGroup || !this.formGroup.valid) {
      return;
    }

    this.authService.login(
      this.usernameFormControl.value,
      this.passwordFormControl.value
    );
  }
}

const routes: Routes = [{ path: "", component: LoginComponent }];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,

    //material
    MatButtonModule,
    MatInputModule,
  ],
})
export class LoginModule {}
