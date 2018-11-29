import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { JwtHelper } from 'angular2-jwt';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { User } from "../auth/user.model";

@Injectable() export class AdminService {
    constructor(private http: Http) { }
    allUsers:User[]=[];

    getAlunos() {
        return this.http.get('http://localhost:3001/user/all_user')
            .map((response: Response) =>{
                const users = response.json().obj;
                console.log(response.json().obj);
                let transformedUsers: User[] = [];

                for (let user of users) {
                      let email = user.email;
                      let password = user.password;
                      let fullName = user.fullName;
                      let userCurso = user.userCurso;
                      let userNumero = user.userNumero;
                      let userNif = user.userNif;
                      let senhas1 = user.senhas1;
                      let senhas2 = user.senhas2;
                      let senhas3 = user.senhas3;
                      let senhas4 = user.senhas4;
                      let senhas5 = user.senhas5;

                    transformedUsers.push(
                        new User(email, password, fullName, userCurso, userNumero, userNif, senhas1, senhas2, senhas3, senhas4, senhas5)
                    );
                  }
                  this.allUsers = transformedUsers;
                console.log("Alunos transformed", transformedUsers);
                return this.allUsers;
            }).catch((error: Response) => Observable.throw(error.json()));

    }

    getIdAlunos() {
        return this.http.get('http://localhost:3001/user/all_user')
            .map((response: Response) =>{
                const users = response.json().obj;
                console.log(response.json().message);
                let transformedUsers: String[] = [];
                for (let user of users) {
                    transformedUsers.push(user._id);
                    }

                console.log("IdAlunos transformed", transformedUsers);
                return transformedUsers;
            }).catch((error: Response) => Observable.throw(error.json()));

    }

  }
