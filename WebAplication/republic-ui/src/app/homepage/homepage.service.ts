import { AuthService } from './../security/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageServic {

  homeUrl = 'http://localhost:8080/home';
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

}
