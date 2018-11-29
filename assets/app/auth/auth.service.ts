import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { JwtHelper } from 'angular2-jwt';
import 'rxjs/Rx';

import { User } from "./user.model";
import { Admin } from "./admin.model";
import { Observable } from "rxjs/Observable";

@Injectable() export class AuthService {
    constructor(private http: Http) { }

    jwtHelper: JwtHelper = new JwtHelper();
    public accountDetails: any = {}
    public accountId: any = {}

    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({
                'Content-Type': 'application/json'
            });
        return this.http.post('http://localhost:3001/user', body, { headers: headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));

        }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3001/user/signin', body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
    }

    //admin
    signinAdmin(admin: Admin) {
        const body = JSON.stringify(admin);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3001/admin/signin', body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
    }

    registeradmin(admin: Admin){
      const body = JSON.stringify(admin);
      const headers = new Headers({
        'Content-Type': 'application/json'
      });
      return this.http.post('http://localhost:3001/admin', body, { headers: headers })
          .map((response: Response) => response.json())
          .catch((error: Response) => Observable.throw(error.json()));

    }


    logout() {
        localStorage.clear();
    }

    isLoggedIn() {

        return localStorage.getItem('token') !== null;
    }

    isLoggedInAdmin(){
        return localStorage.getItem('tokenadmin') !== null;
    }

    getLoggedIn() {
        var tok = localStorage.getItem('token');
        this.accountDetails = this.jwtHelper.decodeToken(tok);
        console.log(this.accountDetails)
        return this.accountDetails.user;
    }

    getLoggedInAdmin(){
      var tok = localStorage.getItem('tokenadmin');
      this.accountDetails = this.jwtHelper.decodeToken(tok);
      console.log(this.accountDetails)
      return this.accountDetails.admin;
    }

    getLoggedInUserId() {
        var tok = localStorage.getItem('token');
        this.accountId = this.jwtHelper.decodeToken(tok);
        return this.accountId.user._id;
    }

    getLoggedInAdminId() {
        var tok = localStorage.getItem('tokenadmin');
        this.accountId = this.jwtHelper.decodeToken(tok);
        return this.accountId.admin._id;
    }

}
