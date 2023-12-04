import { Injectable } from '@angular/core';
import { AuthService } from '../security/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Interest } from './modelInterest';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  interestUrl = 'http://localhost:8080/requests';
  interestUrlUserId = 'http://localhost:8080/requests/user';
  interestUrlOwnerId = 'http://localhost:8080/requests/prop';
  interestUrlHomeId = 'http://localhost:8080/requests/home';
  interestUrlDeleteByHome = 'http://localhost:8080/requests/home';

  constructor(
    private http: HttpClient,
    private auth: AuthService
    ) { }


  listForUserId(): Promise<any> {
    const id = this.auth.jwtPayload?.user_id;
    return this.http.get(`${this.interestUrlUserId}/${id}`)
      .toPromise()
      .then(response => {
        return response;
      })
  }

  listForOwnerId(): Promise<any> {
    const id = this.auth.jwtPayload?.user_id;
    return this.http.get(`${this.interestUrlOwnerId}/${id}`)
      .toPromise()
      .then(response => {
        return response;
      })
  }

  listForHomeId(id:number): Promise<any> {
    return this.http.get(`${this.interestUrlHomeId}/${id}`)
      .toPromise()
      .then(response => {
        return response;
      })
  }

  add( interest: Interest) : Promise<Interest> {

    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<any>(this.interestUrl, Interest.toJson(interest), { headers })
      .toPromise();
  }

  remove(id: number): Promise<any> {
    return this.http.delete(`${this.interestUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

  removeByHomeId(homeId: number ): Promise<any> {
    const userId = this.auth.jwtPayload?.user_id;
    return this.http.delete(`${this.interestUrlDeleteByHome}/home=${homeId}/user=${userId}`)
      .toPromise()
      .then(() => null);
  }


}
