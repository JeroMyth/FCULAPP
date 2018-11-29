import { Component, OnInit} from "@angular/core";
import { Observable }from 'rxjs/Observable';
import { JwtHelper } from 'angular2-jwt';
import { FormControl, FormGroup, Validators, FormArray } from "@angular/forms";


import { Cadeira } from "./cadeira.model";
import { CadeiraService } from "./cadeira.service";
import { AuthService } from "../auth/auth.service";
import { User } from "../auth/user.model";

@Component({
	selector: 'app-cadeiras',
	templateUrl: './cadeiras.component.html'
})

export class CadeirasComponent implements OnInit{
  cadeiras: Observable<Cadeira[]>;

  public user: User;
  userId: any;
  cadeirasDoCurso: Cadeira[]=[];
  selectedCadeira: Cadeira;

  constructor(private authService: AuthService,
              private cadeiraService: CadeiraService,
              ) {

      this.userId = this.authService.getLoggedInUserId();
      this.user = this.authService.getLoggedIn();
      this.cadeiraService.getUserCadeiras(this.user.userCurso).subscribe(cadeiras => this.cadeirasDoCurso = cadeiras);
      //this.cadeiras = this.cadeiraService.getCadeirasByCurso(this.user.userCurso);
      //this.cadeiraService.getCadeirasByCurso(this.user.userCurso).subscribe(cadeiras => this.cadeirasDoCurso = cadeiras);
  }

  ngOnInit(){
    /*
    this.cadeiraService.getUserCadeiras(this.user.userCurso).subscribe(
      (cadeiras: Cadeira[]) => {
        let cadeirasAux: Cadeira[];
        cadeirasAux = cadeiras;
        console.log("Cadeiras Featched", cadeirasAux);
        this.cadeirasDoCurso = cadeirasAux;
      }, error => console.log(error));
      */
      //console.log("user selected :", this.user);
      //console.log("userID selected :", this.userId);
      //console.log("curso selected :", this.user.userCurso);
      //console.log("cadeiras do curso :", this.cadeirasDoCurso);
			//console.log("cadeiras obs :", this.cadeiras);
  }
}
