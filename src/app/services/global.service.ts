import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  private serverHost: String;

  constructor() {
    this.serverHost = 'http://127.0.0.1:8090/';
  }

  public getServerHost() {
    return this.serverHost;
  }
}
