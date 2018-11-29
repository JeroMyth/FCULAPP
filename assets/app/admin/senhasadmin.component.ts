import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SenhasService } from "./senha.service";
import { Senha } from "./senha.model";

@Component({
  selector: 'app-senhasadmin',
  templateUrl: './senhasadmin.component.html'
})

export class SenhasAdminComponent implements OnInit {

  public senhas: Senha = new Senha(0, 0, 0, 0, 0);

  constructor(private senhasService: SenhasService, private router: Router) {
    console.log('SenhasAdmin page');
  }

  ngOnInit() {
    this.senhasService.getSenhas().subscribe(
      (senha: Senha) => {
        let senhaCorrente: Senha;
        senhaCorrente = senha;
        console.log("senha existente", senhaCorrente);
        this.senhas = senha;
      }, error => console.log(error));
  }

  incrementaSenha(value) {
    this.senhasService.maisSenha(value).subscribe(
      (senha: Senha) => {
        let senhaCorrente: Senha;
        senhaCorrente = senha;
        console.log("senha Updated Finished", senhaCorrente);
        this.senhas = senha;
      }, error => console.log(error));
    this.router.navigate(["/admin/senhasadmin?refresh=1"]);
    this.ngOnInit();
  }

  clearSenha() {
    this.senhasService.clearSenha().subscribe(
      (senha: Senha) => {
        let senhaCorrente: Senha;
        senhaCorrente = senha;
        console.log("senha Cleared Finished", senhaCorrente);
        this.senhas = senha;
      }, error => console.log(error));
    this.router.navigate(["/admin/senhasadmin?refresh=1"]);
    this.ngOnInit();
  }
}
