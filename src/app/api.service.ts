import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http: Http;

  constructor(param_http: Http) {
    this.http = param_http;
  }

  public getUrl(url: string): Observable<Response> {
    return this.http.get(url);
  }
}
