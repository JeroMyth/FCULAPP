import { SenhasAdminComponent } from './senhasadmin.component';
import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operator/delay';
import 'rxjs/Rx';

import { Senha } from "./senha.model";

const FETCH_LATENCY = 500;


@Injectable() export class SenhasService {
    constructor(private http: Http) 
        { console.log('InscricaoService instance created.'); }
    
    public adminSenha: Senha;

    getSenhas(){
      return this.http.get('http://localhost:3001/admin/getSenha')
      .map((response: Response) =>{
        const senhaAux = response.json().obj;
        console.log(response.json().message);
        console.log(response.json().obj);
        let senha: Senha = new Senha(senhaAux.licenciatura, senhaAux.mestrado, senhaAux.doutoramento, senhaAux.pagamentoPropinas, senhaAux.tesouraria);
        console.log("senha Encontrada", senha);
        this.adminSenha = senha;
        return this.adminSenha
      })
      .catch((error: Response) => Observable.throw(error.json()));
    }

    maisSenha(value){
      console.log(this.adminSenha);
      console.log(value);

      if(value=='licenciatura'){
      this.adminSenha.licenciatura=this.adminSenha.licenciatura+1;
      }
      else if (value=='mestrado'){
      this.adminSenha.mestrado=this.adminSenha.mestrado+1;
      }
      else if (value=='doutoramento'){
        this.adminSenha.doutoramento=this.adminSenha.doutoramento+1;
      }
      else if (value=='pagamentoPropinas'){
        this.adminSenha.pagamentoPropinas=this.adminSenha.pagamentoPropinas+1;
      }
      else {
        this.adminSenha.tesouraria=this.adminSenha.tesouraria+1;
      }
      const body = JSON.stringify(this.adminSenha);
      const headers = new Headers(
            { 'Content-Type': 'application/json' }
        );
      return this.http.patch('http://localhost:3001/admin/updateSenha', body, { headers: headers })
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
      
      console.log("End Update", this.adminSenha);
    }

  clearSenha() {
    console.log(this.adminSenha);
    let clearSenha: Senha = new Senha(0, 0, 0, 0, 0);
    const body = JSON.stringify(clearSenha);
    const headers = new Headers(
      { 'Content-Type': 'application/json' }
    );
    return this.http.patch('http://localhost:3001/admin/updateSenha', body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
