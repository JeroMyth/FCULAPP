import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";

import { User } from "./user.model";
import { Admin } from "./admin.model";
import { AuthService } from "./auth.service";

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html'
})

export class SigninComponent implements OnInit {
	myForm: FormGroup;
	email: any;

	constructor(private authService: AuthService,
				private router: Router) {}

	ngOnInit() {
		this.myForm = new FormGroup({
			email: new FormControl(null, Validators.required),
			password: new FormControl(null, Validators.required)
		})
	}

	//Necessario If(! this.myForm.value.email contem @alunos.fc.ul.pt)
	onSubmit() {
		console.log('tipoDeEmail',this.myForm.value.email.split('@')[1]);
		if(this.myForm.value.email.split('@')[1]=='alunos.fc.ul.pt'){
		const user = new User(this.myForm.value.email, this.myForm.value.password);

		this.authService.signin(user).subscribe(
			data => { localStorage.setItem('token', data.token);
			localStorage.setItem('userId', data.userId);
			console.log('aluno',data.token);
				this.router.navigateByUrl('/home');
		},
		error => console.log(error));
	}
	else {
		const admin = new Admin(this.myForm.value.email, this.myForm.value.password);
		console.log('admin',admin);
		this.authService.signinAdmin(admin).subscribe(
			data => { localStorage.setItem('tokenadmin', data.tokenadmin);

			localStorage.setItem('adminId', data.adminId);
			console.log('message',data.message);
				this.router.navigateByUrl('/admin');
		},
		error => console.log(error));

	}
		this.myForm.reset();
	}

}
