import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
@Injectable()
export class LoginGuardian {
  constructor(private loginService: LoginService, private router: Router) {}

  CanActivateLogin() {
    if (this.loginService.getIdToken() != null) {
        console.log("true");
      return true;
    } else {
        console.log("False");
      this.router.navigate(['login']);
      return false;
    }
  }
}
