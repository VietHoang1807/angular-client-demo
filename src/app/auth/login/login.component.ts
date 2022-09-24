import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { Constants } from 'src/shared/constants/constants';

export interface userLogin {
  _id?: string
  email?: string
  password?: string
  department?: string
  localtion?: string
  address?: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin: userLogin = {} as userLogin;
  userRegister: userLogin = {} as userLogin;
  isVisible: boolean;
  constructor(
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  onHandleLogin() {
    if (!this.userLogin.email && !this.userLogin.password) {
      alert('EMAIL AND PASSWORD NOT NULL');
      return;
    }
    const payload = Object.assign({}, this.userLogin)
    this.userService.login(payload).subscribe(res => {
      if (!res || res.status != 'Ok') {
        alert(res.message);
        return;
      };
      const time = new Date().getTime();
      localStorage.setItem(Constants.ACCESS_TOKEN, JSON.stringify({accessToken: res.accessToken, ex: time + (60 * 60)}))
      localStorage.setItem(Constants.REFRESH_TOKEN, JSON.stringify({refreshToken: res.refreshToken, ex: time + (365 * 24 * 60 * 60)}))
      this.route.navigate([Constants.DASHBOARD]);
    }, () => alert('SYSTEM INTERNAL ERROR'))
  }

  onHandleRegister() {
    this.userRegister = {};
    this.isVisible = true;
  }

  onHandleCancel = () => this.isVisible = false;

  onHandleOk = () => {
    if (!this.userRegister.email && !this.userRegister.password) {
      alert('I AM NOT INPUT ITEM REQUIRED');
      return;
    }
    const payload = Object.assign({}, this.userRegister);
    this.userService.registerLogin(payload).subscribe(res => {
      if (!res || res.status != 'Ok') {
        alert(res.message);
        return;
      }
      alert('Ok');
      const time = new Date().getTime();
      localStorage.setItem(Constants.ACCESS_TOKEN, JSON.stringify({accessToken: res.accessToken, ex: time + (60 * 60)}))
      localStorage.setItem(Constants.REFRESH_TOKEN, JSON.stringify({accessToken: res.accessToken, ex: time + (365 * 24 * 60 * 60)}))
      this.route.navigate([Constants.DASHBOARD]);
    }, () => alert('SYSTEM INTERNAL ERROR'))
  }
}
