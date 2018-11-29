import { Component } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

import { InscricaoService } from "./inscricao.service";
import { UnidadeService } from "./unidade.service";
import { AuthService } from "../auth/auth.service";
import { User } from "../auth/user.model";
import { Matricula } from "./matricula.model";
import { Unidade } from "./unidade.model";
import { isNullOrUndefined } from "util";

@Component({
    selector: 'app-factura',
    templateUrl:'./fatura.component.html'

})

export class FacturaComponent {

    public user : User;
    userId : any;
    public userMatricula : Matricula;
    anoLectivo: string;
    public validado: Boolean;
    public unidades: Unidade[]=[];

    public date: string;


    constructor(private inscricaoService: InscricaoService,
        private authService: AuthService,
        private unidadeService: UnidadeService) {

        this.user = this.authService.getLoggedIn();
        this.userId = this.authService.getLoggedInUserId();
        }

        ngOnInit(){

            let year_1less = moment().subtract(1, 'years').calendar().split('/')[2];
            let year = moment().format('YYYY');
            let year_1plus = moment().add(1, 'years').calendar().split('/')[2];
            let month = moment().format('MM');

            this.date = moment().format('DD/MM/YYYY');

            if ((Number(month)) > 0o1 && (Number(month)) < 0o7) {
                this.anoLectivo = year_1less + '/' + year;
            } else {
                this.anoLectivo = year + '/' + year_1plus;
            }

            
            this.inscricaoService.getUserCurrentMatricula(this.userId, this.anoLectivo).subscribe((matricula:Matricula) => {this.userMatricula = matricula; console.log("Matricula para facturacao",this.userMatricula)});
                this.inscricaoService.getUserCurrentMatricula(this.userId, this.anoLectivo).subscribe((matricula: Matricula) => { this.unidades = this.unidadeService.getUnidadesViaCod(matricula); console.log("Unidades da Matricula", this.unidades) });
                this.inscricaoService.getUserCurrentMatricula(this.userId, this.anoLectivo).subscribe((matricula: Matricula) => { this.validado = matricula.validade; console.log("Validade da Matricula para facturacao", this.userMatricula.validade) });    
            }

 }
