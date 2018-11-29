import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';

import { Senha } from "./senha.model";
import { SenhasService } from "./senha.service";

@Component({
	selector: 'app-senha',
	templateUrl: './senhas.component.html'
})

export class SenhasDisplayComponent implements OnInit {
	public senha: Senha = new Senha(0, 0, 0, 0, 0);

	constructor(private senhaService: SenhasService) {
		console.log('SenhaComponent page');
	 }

	ngOnInit(){
		this.senhaService.getSenhas().subscribe(
			(senha: Senha) => {
				let senhaCorrente: Senha;
				senhaCorrente = senha;
				console.log("senha existente", senhaCorrente);
				this.senha = senhaCorrente;
			}, error => console.log(error));
	}
}
