import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {tick} from '@angular/core/testing';

const enum endpoint {
  token = 'authentication/token/new',
  auth = 'authentication/token/validate_with_login'
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = 'https://api.themoviedb.org/3/';
  private api_key = environment.api;


  constructor(private httpClient: HttpClient) {
  }

  token(): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}${endpoint.token}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  auth(token): Observable<any> {
    const myHeaders = new HttpHeaders().set('Authorization', token);
    return this.httpClient.post(`${this.URL}${endpoint.auth}`, {username: 'vasua', password: 'test123', request_token: token}, {
      params: {
        api_key: this.api_key,
      },
    });
  }
}
