import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { JwtHelper } from 'angular2-jwt';
import 'rxjs/Rx';

import{ User } from "../auth/user.model";
import{ Matricula } from "./matricula.model";

@Injectable()
export class UserService {
    constructor(private http: Http){
        console.log('InscricaoService instance created.');
    }

    updateUser(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers(
            { 'Content-Type': 'application/json' }
        );
        return this.http.patch('http://localhost:3001/user/update', body, { headers: headers })
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
     }

     updateMatricula(matricula: Matricula) {
         const body = JSON.stringify(matricula);
         const headers = new Headers(
             { 'Content-Type': 'application/json' }
         );
         return this.http.patch('http://localhost:3001/user/update_matricula', body, { headers: headers })
         .map((response: Response) => response.json())
         .catch((error: Response) => Observable.throw(error.json()));
      }

}
