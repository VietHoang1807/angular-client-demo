import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/services/user.service';
import { Constants } from 'src/shared/constants/constants';

@Injectable()
export class GuardGuard implements CanActivate {

  @Inject('user') user: UserService;
  @Inject('route') route: Router;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const access = JSON.parse(localStorage.getItem(Constants.ACCESS_TOKEN));
    const refresh = JSON.parse(localStorage.getItem(Constants.REFRESH_TOKEN));
    const time = new Date().getTime();
    if (access && time - access.ex > 1) return true;
    if (!access || !refresh) {
      this.route.navigate(['login']);
      return false;
    }
    if (!access && refresh) {
      this.user.refreshToken(refresh.refreshToken).subscribe(res => {
        if (res && res.status !== 'OK') {
          this.route.navigate(['login']);
          alert(res.message);
          return false;;
        }
        localStorage.setItem(Constants.ACCESS_TOKEN, JSON.stringify({ accessToken: res.accessToken, ex: time + (60 * 60) }))
        localStorage.setItem(Constants.REFRESH_TOKEN, JSON.stringify({ refreshToken: res.refreshToken, ex: time + (365 * 24 * 60 * 60) }))
        return true;
      })
    }
    return true;
  }

}
