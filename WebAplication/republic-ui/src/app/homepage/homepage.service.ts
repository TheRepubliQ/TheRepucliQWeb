import { AuthService } from './../security/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Home, HomeRegister } from './model';

@Injectable({
  providedIn: 'root'
})
export class HomepageServic {

  homeUrl = 'http://localhost:8080/home';
  homeRegister = 'http://localhost:8080/homeEdit';
  email: any;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  list(): Promise<any> {
    return this.http.get(`${this.homeUrl}`)
      .toPromise()
      .then(response => {
        return response;
      })
  }

  homeView(id : number): Promise<any>{
    return this.http.get(`${this.homeUrl}/${id}`)
      .toPromise()
      .then(response => {
        return response;
      })
  }

  add(home: HomeRegister) : Promise<HomeRegister> {

    home.user = this.auth.jwtPayload?.user_id;
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<any>(this.homeRegister, HomeRegister.toJson(home), { headers })
      .toPromise();
  }

  update(home: HomeRegister, id: number) : Promise<Home>{
    home.user = this.auth.jwtPayload?.user_id;
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put<any>(`${this.homeRegister}/${id}`, HomeRegister.toJson(home), { headers })
      .toPromise();
  }

}
