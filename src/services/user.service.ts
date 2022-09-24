import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/shared/baseService/base.service';

@Injectable()
export class UserService extends BaseService {

  registerLogin(payload): Observable<any> {
    return this.post('user/register', payload);
  }

  login(payload): Observable<any> {
    return this.post('user/login', payload);
  }

  logout(id): Observable<any> {
    return this.post('user/logout', id)
  }

  searchUser(payload): Observable<any> {
    return this.post('user/searchUser', payload);
  }

  updUser(payload): Observable<any> {
    return this.post('user/updateUser', payload);
  }

  refreshToken(payload): Observable<any> {
    return this.post('user/refresh-token', payload)
  }

}
