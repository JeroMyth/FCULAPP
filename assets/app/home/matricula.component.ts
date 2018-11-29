import { Component, OnInit} from "@angular/core";
import { Observable }from 'rxjs/Observable';
import { JwtHelper } from 'angular2-jwt';
import { FormControl, FormGroup, Validators, FormArray } from "@angular/forms";
import * as moment from 'moment';
import { Date } from "core-js";
import { isEmpty } from "rxjs/operator/isEmpty";
import { Router } from "@angular/router";
import { isNull } from "util";

import { Unidade } from "./unidade.model";
import { InscricaoService } from "./inscricao.service";
import { UnidadeService } from "./unidade.service";
import { AuthService } from "../auth/auth.service";
import { User } from "../auth/user.model";
import { Matricula } from "./matricula.model";



//import { UnidadeComponent } from "./unidade.component"


@Component({
    selector: 'app-matricula',
    templateUrl: './matricula.component.html'
})


export class MatriculaComponent implements OnInit {
    unidades: Observable<Unidade[]>;


    public user: User;
    userId: any;

    allunidades: Unidade[]=[];

    allmatriculas: Matricula[] = [];

    checkedBoxes: Array<any>;

    selectedUnid: String[]=[];

    anoLectivo: string;

    boll: Boolean=false;

    public exist: boolean;


    constructor(private inscricaoService: InscricaoService,
                private authService: AuthService,
                private unidadeService: UnidadeService,
                private router: Router) {

        this.user = this.authService.getLoggedIn();
        this.userId = this.authService.getLoggedInUserId();
        this.unidades = this.unidadeService.getUnidades(this.user.userCurso);
        this.unidadeService.getUnidades(this.user.userCurso).subscribe(unidades => this.allunidades = unidades);
    }

    ngOnInit(){

        let year_1less = moment().subtract(1, 'years').calendar().split('/')[2];
        let year = moment().format('YYYY');
        let year_1plus = moment().add(1, 'years').calendar().split('/')[2];
        let month = moment().format('MM');

        if ((Number(month)) > 0o1 && (Number(month)) < 0o7) {
            this.anoLectivo = year_1less + '/' + year;
        } else {
            this.anoLectivo = year + '/' + year_1plus;
        }

        this.inscricaoService.existUserCurrentMatricula(this.userId, this.anoLectivo).subscribe((found:boolean) => {this.exist = found; console.log("OnInit log",this.exist)});
    }


    onSubmit(form: FormGroup){
        let i = 0;
        this.checkedBoxes=form.value;
        console.log(this.checkedBoxes);
        for (let index = 1; index < this.allunidades.length+1; index++) {
            if(this.checkedBoxes[index] === true){
                this.selectedUnid[i] = this.allunidades[index-1].codigo;
                i++;
            }
        }

        const matricula = new Matricula(
                this.anoLectivo,
                this.boll,
                this.selectedUnid,
                this.userId
        );
        console.log(matricula);
        this.inscricaoService.signup(matricula).subscribe(data => console.log(data), error => console.log(error));
        this.router.navigate(["/home/matricula?refresh=1"]);
        this.ngOnInit();

//        this.inscricaoService.getMatriculas().subscribe(matriculas =>  {this.allmatriculas = matriculas; console.log("Oi matricula",this.allmatriculas)} );

    }


 }
