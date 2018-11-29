
import { Injectable, OnDestroy } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operator/delay';
import { JwtHelper } from 'angular2-jwt';
import 'rxjs/Rx';
import * as moment from 'moment';


import { Matricula } from "./matricula.model";
import { AuthService } from "../auth/auth.service";

@Injectable() 
export class InscricaoService implements OnDestroy {

    constructor(private http: Http, private authService: AuthService) 
        { console.log('InscricaoService instance created.'); }
    ngOnDestroy() { console.log('InscricaoService instance destroyed.'); }

    public allMatriculas: Matricula[] = [];
    todasMatriculas : Observable<any>;


    signup(matricula: Matricula){
        const body = JSON.stringify(matricula);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post('http://localhost:3001/user/inscricao', body, { headers: headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json())); 
    }

    getMatriculas() {
        return this.http.get('http://localhost:3001/user/matricula_user')
            .map((response: Response) =>{
                const matriculas = response.json().obj;
                console.log(response.json().message); 
                let transformedMatriculas: Matricula[] = []; 
                for (let matricula of matriculas) {
                    let anoLectivo = matricula.anoLectivo;
                    let validade = matricula.validade;
                    let unidades = matricula.unidades;
                    let id_user = matricula.id_user;

                    transformedMatriculas.push(
                        new Matricula(anoLectivo, validade, unidades, id_user)
                    ); 
                    }     
                this.allMatriculas = transformedMatriculas;
                console.log("Matriculas transformed", this.allMatriculas); 
                return transformedMatriculas;
            }).catch((error: Response) => Observable.throw(error.json()));
            
    }

    getUserCurrentMatricula(userID, ano_lectivo) {
        let found:boolean;
        found = false;
        let userMatricula: Matricula;
        return this.http.get('http://localhost:3001/user/matricula_user')
            .map((response: Response) => {
                const matriculas = response.json().obj;
                console.log(response.json().message);
                let transformedMatriculas: Matricula;
                let i = 0;
                while (i < matriculas.length && !found) {
                    if (matriculas[i].anoLectivo == ano_lectivo && matriculas[i].id_user == userID) {

                        let anoLectivo = matriculas[i].anoLectivo;
                        let validade = matriculas[i].validade;
                        let unidades = matriculas[i].unidades;
                        let id_user = matriculas[i].id_user;
                        transformedMatriculas = new Matricula(anoLectivo, validade, unidades, id_user);
                        found = true;
                    }
                    i++;
                }                                     
                userMatricula = transformedMatriculas;
                console.log("Founded Matricula", userMatricula);
                return userMatricula;
            }).catch((error: Response) => Observable.throw(error.json()));
    }

    existUserCurrentMatricula(userID, ano_lectivo) {
        let found: boolean;
        found = false;
        let userMatricula: Matricula;
        return this.http.get('http://localhost:3001/user/matricula_user')
            .map((response: Response) => {
                
                const matriculas = response.json().obj;
                console.log(response.json().message);
                let transformedMatriculas: Matricula;
                let i = 0;
                while (i < matriculas.length && !found) {
                    if (matriculas[i].anoLectivo == ano_lectivo && matriculas[i].id_user == userID) {
                        found = true;
                    }
                    i++;
                }
                console.log("Matricula found?", found);
                return found;
            }).catch((error: Response) => Observable.throw(error.json()));
    }


}