import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { take, tap } from "rxjs/operators";

@Injectable()
export class AuthService implements OnDestroy {
  private readonly _destroySource: Subject<void> = new Subject<void>();
  private readonly _authenticatedSource: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor(
    private readonly httpClient: HttpClient,
    private readonly jwtHelper: JwtHelperService
  ) {}

  ngOnDestroy(): void {
    this._destroySource.next();
    this._destroySource.complete();
  }

  login(username: string, password: string): Observable<string> {
    this._authenticatedSource.next(false);

    return this.httpClient
      .post<string>("/api/auth/login", {
        username: username,
        password: password,
      })
      .pipe(
        tap((accessToken: string) => {
          localStorage.setItem("access_token", accessToken);
          this._authenticatedSource.next(true);
        }),
        tap(() => {
          console.log(this.jwtHelper.isTokenExpired()); // true or false
          console.log(this.jwtHelper.getTokenExpirationDate()); // date
          console.log(this.jwtHelper.decodeToken(this.jwtHelper.tokenGetter())); // token
        }),
        take(1)
      );
  }
}
