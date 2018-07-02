import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';


@Injectable()
export class UserService {

  private serverHost: String;
  private headers: HttpHeaders;

  constructor(private http: HttpClient,
              private globalService: GlobalService) {
    this.serverHost = globalService.getServerHost();
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  public registerUser(user) {
    return this.http.post(this.serverHost + 'aluno/', JSON.stringify(user), {
        headers: this.headers
    });
  }

}
