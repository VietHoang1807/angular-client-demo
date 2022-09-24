import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  gatewayUrl = environment.GATEWAY;
  constructor(private http: HttpClient) {}

  post(url: string, data, params?) {
    return this.http.post(`${this.gatewayUrl}/${url}`, data, {
      headers: this.getHeader(),
      params
    })
  }

  delete(url: string, id?, ) {
    return this.http.delete(`${this.gatewayUrl}/${url}`, {
      headers: this.getHeader(),
      params: {id: id}
    })
  }

  getHeader() {
    const token = this.getAccessToken();
    // return new HttpHeaders({
    //   'access-control-allow-origin': "*",
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${token}`
    // })
    return new HttpHeaders().set('Authorization', `Bearer ${token}`)
  }

  private getAccessToken() {
    const token = JSON.parse(localStorage.getItem(Constants.ACCESS_TOKEN));
    return token?.accessToken;
  }
}
