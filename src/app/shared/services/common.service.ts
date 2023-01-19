import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(public http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>(
      `https://my-json-server.typicode.com/vijayanmsc/myjson/users`
    );
  }

  getPosts(): Observable<any> {
    return this.http.get<any>(
      `https://my-json-server.typicode.com/vijayanmsc/myjson/posts`
    );
  }
}
