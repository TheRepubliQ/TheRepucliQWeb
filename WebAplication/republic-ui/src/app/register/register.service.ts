import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../security/model';
import { AuthService } from '../security/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  registerUrl = 'http://localhost:8080/registrar';
  userUrl = 'http://localhost:8080/user';


  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  add(user: User): Promise<User> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<any>(this.registerUrl, User.toJson(user), { headers })
      .toPromise();
  }

  getUserById(): Promise<any> {
    const id = this.auth.jwtPayload?.user_id;
    return this.http.get(`${this.userUrl}/${id}`)
      .toPromise()
      .then(response => {
        return response;
      })
  }

  update( user : User) : Promise<User>{
    const id = this.auth.jwtPayload?.user_id;
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put<any>(`${this.userUrl}/${id}`, User.toJson(user), { headers })
      .toPromise();
  }

}
