import { AuthService } from './../security/auth.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Home, HomeRegister } from './model';

export interface HomeFilter {
  user?: any,
  type?: string,
  address?: any,
}

@Injectable({
  providedIn: 'root'
})

export class HomepageServic {

  homeUrl = 'http://localhost:8080/home';
  homeFilterUrl = 'http://localhost:8080/home/filter';
  homeRegister = 'http://localhost:8080/homeEdit';
  homeInfo = 'http://localhost:8080/requests/homeInfos/';
  homeOwner = 'http://localhost:8080/homeEdit/listHomes';

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

  listForUserId(): Promise<any>{
    const id = this.auth.jwtPayload?.user_id;
    return this.http.get(`${this.homeOwner}/${id}`)
      .toPromise()
      .then(response => {
        return response;
      })
  }

  isInterested(homeId: number, userId: number) : Promise<any>{
    return this.http.get(`${this.homeInfo}home=${homeId}/user=${userId}`)
    .toPromise()
    .then(response => {
      return response;
    })
  }

  search(filter: HomeFilter): Promise<any> {

    let params = new HttpParams();

    if(filter.user){
      params = params.set('user', filter.user);
    }

    if (filter.type) {
      params = params.set('type', filter.type);
    }

    if (filter.address) {
      params = params.set('address', filter.address);
    }


    return this.http.get(`${this.homeFilterUrl}?resumo`, {  params })
    .toPromise()
    .then(response => {
      return response;
    });
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

  remove(id: number): Promise<any> {
    return this.http.delete(`${this.homeRegister}/${id}`)
      .toPromise()
      .then(() => null);
  }

}
