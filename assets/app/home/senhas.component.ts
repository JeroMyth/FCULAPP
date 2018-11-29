import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { User } from "../auth/user.model";
import { UserService } from "./user.service";
import { AuthService } from "../auth/auth.service";
import { AdminService } from "../admin/admin.service";


@Component({
    selector: 'app-senhas_aluno',
    template: `
   <h1> Senhas </h1>
   <div class="row">  
   <app-senha></app-senha>
   </div>
   <br>
   <br>
   <br>
   <br>
    <div class="row">
        <div class="col-8 col-md-4">
         <div class="panel panel-info">   
                <div class="panel-heading" style="height:150%">
                    <p>Licenciatura: </p>
                </div>
                <div class="panel-body" style="text-align:center">
                    {{nowSenha1}}
                </div>
                <div class="panel-footer">
                   <button class="btn btn-primary" (click)="updateSenhas('1')">Submit</button>
                </div>
         </div>   
        </div>
        <div class="col-8 col-md-4">
         <div class="panel panel-info">   
                <div class="panel-heading">
                    <p>Mestrado: </p>
                </div>
                <div class="panel-body" style="text-align:center">
                    {{nowSenha2}}
                </div>
                <div class="panel-footer">
                   <button class="btn btn-primary" (click)="updateSenhas('2')">Submit</button>
                </div>
         </div>   
        </div>
        <div class="col-8 col-md-4">
         <div class="panel panel-info">   
                <div class="panel-heading">
                    <p>Doutoramento: </p>
                </div>
                <div class="panel-body" style="text-align:center">
                    {{nowSenha3}}
                </div>
                <div class="panel-footer">
                   <button class="btn btn-primary" (click)="updateSenhas('3')">Submit</button>
                </div>
         </div>   
        </div>
        <div class="col-8 col-md-4">
         <div class="panel panel-info">   
                <div class="panel-heading">
                    <p>Pagamento de Propinas: </p>
                </div>
                <div class="panel-body" style="text-align:center">
                    {{nowSenha4}}
                </div>
                <div class="panel-footer">
                   <button class="btn btn-primary" (click)="updateSenhas('4')">Submit</button>
                </div>
         </div>   
        </div>
        <div class="col-8 col-md-4">
         <div class="panel panel-info">   
                <div class="panel-heading">
                    <p>Tesouraria: </p>
                </div>
                <div class="panel-body" style="text-align:center">
                    {{nowSenha5}}
                </div>
                <div class="panel-footer">
                   <button class="btn btn-primary" (click)="updateSenhas('5')">Submit</button>
                </div>
         </div>   
        </div>
    </div>           
    `
})

export class SenhasComponent implements OnInit { 

    constructor(public userService: UserService, 
                public authService:AuthService,
                public adminService: AdminService,
                private router: Router) {
        console.log('UserService instance created.');
        console.log('AuthService instance created.');
        console.log('AdminService instance created.');
    }

    public user: User;
    userCurrent:User;
    public nowSenha1: number;
    public nowSenha2: number;
    public nowSenha3: number;
    public nowSenha4: number;
    public nowSenha5: number;

    ngOnInit(){
        this.userCurrent = this.authService.getLoggedIn();
        this.nowSenha1 = this.userCurrent.senhas1;
        this.nowSenha2 = this.userCurrent.senhas2;
        this.nowSenha3 = this.userCurrent.senhas3;
        this.nowSenha4 = this.userCurrent.senhas4;
        this.nowSenha5 = this.userCurrent.senhas5;
        this.adminService.getAlunos().subscribe(
            (alunos: User[]) => {
                let userAux:User;
                for(let aluno of alunos){
                    if(aluno.email == this.userCurrent.email){
                        userAux =  aluno;
                        this.nowSenha1 = userAux.senhas1;
                        this.nowSenha2 = userAux.senhas2;
                        this.nowSenha3 = userAux.senhas3;
                        this.nowSenha4 = userAux.senhas4;
                        this.nowSenha5 = userAux.senhas5;
                    }
                }
                this.user = userAux;
            }, error => console.log(error));
    }

    updateSenhas(value:string){
        
        if(value=='1'){
            this.adminService.getAlunos()
                .subscribe((alunos: User[]) => {
                    for (let aluno of alunos) {
                        if (this.nowSenha1 <= aluno.senhas1) {
                            this.nowSenha1 = aluno.senhas1 + 1;
                        }
                    };
                    console.log("senhaMaior", this.nowSenha1);
                    let updatedUser = new User(
                        this.user.email,
                        this.user.password,
                        this.user.fullName,
                        this.user.userCurso,
                        this.user.userNumero,
                        this.user.userNif,
                        this.nowSenha1,
                        this.nowSenha2,
                        this.nowSenha3,
                        this.nowSenha4,
                        this.nowSenha5);
                    console.log("aluno updated", updatedUser);
                    this.userService.updateUser(updatedUser)
                        .subscribe(data => console.log(data), error => console.log(error));
                    this.router.navigate(["/home/senhas?refresh=1"]);
                    this.ngOnInit();
                }, error => console.log(error));
        }
        else
            if (value == '2') {
                this.adminService.getAlunos()
                    .subscribe((alunos: User[]) => {
                        for (let aluno of alunos) {
                            if (this.nowSenha2 <= aluno.senhas2) {
                                this.nowSenha2 = aluno.senhas2 + 1;
                            }
                        };
                        console.log("senhaMaior", this.nowSenha2);
                        let updatedUser = new User(
                            this.user.email,
                            this.user.password,
                            this.user.fullName,
                            this.user.userCurso,
                            this.user.userNumero,
                            this.user.userNif,
                            this.nowSenha1,
                            this.nowSenha2,
                            this.nowSenha3,
                            this.nowSenha4,
                            this.nowSenha5);
                        console.log("aluno updated", updatedUser);
                        this.userService.updateUser(updatedUser)
                            .subscribe(data => console.log(data), error => console.log(error));
                        this.router.navigate(["/home/senhas?refresh=2"]);
                        this.ngOnInit();
                    }, error => console.log(error));
            }
            else
                if (value == '3') {
                    this.adminService.getAlunos()
                        .subscribe((alunos: User[]) => {
                            for (let aluno of alunos) {
                                if (this.nowSenha3 <= aluno.senhas3) {
                                    this.nowSenha3 = aluno.senhas3 + 1;
                                }
                            };
                            console.log("senhaMaior", this.nowSenha3);
                            let updatedUser = new User(
                                this.user.email,
                                this.user.password,
                                this.user.fullName,
                                this.user.userCurso,
                                this.user.userNumero,
                                this.user.userNif,
                                this.nowSenha1,
                                this.nowSenha2,
                                this.nowSenha3,
                                this.nowSenha4, 
                                this.nowSenha5);
                            console.log("aluno updated", updatedUser);
                            this.userService.updateUser(updatedUser)
                                .subscribe(data => console.log(data), error => console.log(error));
                            this.router.navigate(["/home/senhas?refresh=3"]);
                            this.ngOnInit();
                        }, error => console.log(error));
                }
                else
                    if (value == '4') {
                        this.adminService.getAlunos()
                            .subscribe((alunos: User[]) => {
                                for (let aluno of alunos) {
                                    if (this.nowSenha4 <= aluno.senhas4) {
                                        this.nowSenha4 = aluno.senhas4 + 1;
                                    }
                                };
                                console.log("senhaMaior", this.nowSenha4);
                                let updatedUser = new User(
                                    this.user.email,
                                    this.user.password,
                                    this.user.fullName,
                                    this.user.userCurso,
                                    this.user.userNumero,
                                    this.user.userNif,
                                    this.nowSenha1,
                                    this.nowSenha2,
                                    this.nowSenha3,
                                    this.nowSenha4,
                                    this.nowSenha5);
                                console.log("aluno updated", updatedUser);
                                this.userService.updateUser(updatedUser)
                                    .subscribe(data => console.log(data), error => console.log(error));
                                this.router.navigate(["/home/senhas?refresh=4"]);
                                this.ngOnInit();
                            }, error => console.log(error));
                    }
                    else
                        if (value == '5') {
                            this.adminService.getAlunos()
                                .subscribe((alunos: User[]) => {
                                    for (let aluno of alunos) {
                                        if (this.nowSenha5 <= aluno.senhas5) {
                                            this.nowSenha5 = aluno.senhas5 + 1;
                                        }
                                    };
                                    console.log("senhaMaior", this.nowSenha5);
                                    let updatedUser = new User(
                                        this.user.email,
                                        this.user.password,
                                        this.user.fullName,
                                        this.user.userCurso,
                                        this.user.userNumero,
                                        this.user.userNif,
                                        this.nowSenha1,
                                        this.nowSenha2,
                                        this.nowSenha3,
                                        this.nowSenha4,
                                        this.nowSenha5);
                                    console.log("aluno updated", updatedUser);
                                    this.userService.updateUser(updatedUser)
                                        .subscribe(data => console.log(data), error => console.log(error));
                                    this.router.navigate(["/home/senhas?refresh=5"]);
                                    this.ngOnInit();
                                }, error => console.log(error));
                        }
                                        
    }

}