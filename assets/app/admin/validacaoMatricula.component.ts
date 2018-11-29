import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators, FormArray } from "@angular/forms";
import * as moment from 'moment';
import { Date } from "core-js";
import { Router } from "@angular/router";

import { User } from "../auth/user.model";
import { InscricaoService } from "../home/inscricao.service";
import { AdminService } from "./admin.service";
import { UserService } from "../home/user.service";

import { Matricula } from "../home/matricula.model"


@Component({
    selector: 'app-validacaoMatricula',
    template: `
    <div class="col-md-8 col-md-offset-2">
        <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm.form)">
            <div class="row" >
                    <div class="col-2 col-md-2">
                        <h5 highlight>Ano letivo</h5>
                    </div>
                    <div class="col-8 col-md-6">
                        <h5 highlight>AlunoId</h5>
                    </div>
                    <div class="col-2 col-md-2">
                        <h5 highlight></h5>
                    </div>
                </div>
            <div class="form-check">
             <div *ngFor='let matricula of allMatriculas; let i=index'>
              <div class="row" >
               <div class="col-4 col-md-2">
                    <label class="form-check-label" for="{{matricula._id}}"> {{matricula.anoLectivo}} </label>
                </div>
               <div class="col-8 col-md-6">
               {{matricula.id_user}}
                </div>

                <div class="col-2 col-md-2">
                        <input class="form-check-input" type="checkbox" id={{matricula._id}} name="{{i + 1}}" [ngModel]="''">
                </div>
              </div>
                <br>
             </div>
            </div>

        <button class="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>

    `
})

export class ValidacaoMatriculaComponent implements OnInit{

  constructor(private inscricaoService: InscricaoService, private adminService: AdminService ,
  private userService : UserService, private router: Router)
      { console.log('InscricaoService instance created.');
        console.log('AdminService instance created');}

   public allMatriculas: Matricula[] = [];

   public anoLectivo : string;

   public usersId : String[] = [];
   public showInfos : String[] = [];

   public idMatricula : any;
   public user : User[] = [];

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

       this.inscricaoService.getMatriculas().subscribe(matriculas =>  {
       this.allMatriculas = matriculas.filter(matricula => matricula.validade == 'false');


       console.log(this.allMatriculas);


     } )


      //this.inscricaoService.getMatriculas().subscribe(matriculas =>  {
        // let allmatriculas = matriculas.filter(matricula => {matricula.validade == false});
         //this.adminService.getIdAlunos().subscribe(alunos => {this.usersId = alunos});
         //this.adminService.getAlunos().subscribe(users => {this.user = users });

         //console.log('before for',this.allMatriculas);
         //console.log('before for',this.usersId);
         //console.log('before for', this.user);

         //for(let i=0; i < this.allmatriculas ; i++ ){
          // for (let j=0 ; j< this.usersId ; j++){
           //if(this.allmatriculas[i].id_user == this.usersId[j]){
            //    let data = this.allmatriculas[i].anoLectivo + '/' + this.user[j].userCurso + '/' + this.user[j].userNumero;
              //  this.showInfos[i] = data;
           //}
         //}
       //}
       //}
       //);
     }

     onSubmit(form: FormGroup){
       let i = 0;
       let matricula : Matricula ;

       let checkedBoxes=form.value;
       console.log(checkedBoxes);
       for (let index = 1; index < this.allMatriculas.length+1; index++) {
            if(checkedBoxes[index] === true){
             matricula = this.allMatriculas[index-1];
             matricula.validade=true;
             console.log("new matricula",matricula);
             this.userService.updateMatricula(matricula).subscribe(data => console.log(data), error => console.log(error));

           }
       }
         this.router.navigate(["/admin/validacaoMatricula?refresh=2"]);
       this.ngOnInit();
     }

}
