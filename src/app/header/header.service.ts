import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Header } from './header';

@Injectable()
export class HeaderService {
  // private _url = "http://jsonplaceholder.typicode.com/users/1";
  private _url = "./app/header/header.json";

  constructor(private _http: Http) { }

  getHeader(): Observable<Header> {
    return this._http.get(this._url)
      .map(res => res.json());
  }


}
