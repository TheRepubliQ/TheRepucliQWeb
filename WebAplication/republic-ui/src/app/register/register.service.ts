import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../security/model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  activitiesUrl = 'http://localhost:8080/registrar';


  constructor(
    private http: HttpClient
  ) { }

  add(register: User): Promise<User> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<any>(this.activitiesUrl, User.toJson(register), { headers })
      .toPromise();
  }
}
