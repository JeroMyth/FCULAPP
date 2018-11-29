import {Component, OnInit} from "@angular/core"; 
import {FormControl, FormGroup, Validators} from "@angular/forms";
 
import { AuthService } from "./auth.service";
import { User } from "./user.model";
import { isEmpty } from "rxjs/operator/isEmpty";

@Component({
	selector: 'app-signup', 
	templateUrl: './signup.component.html' 
}) 

export class SignupComponent implements OnInit { 
	myForm: FormGroup; 

	constructor(private authService: AuthService) { }

	ngOnInit() { 
		this.myForm = new FormGroup({ 
			fullName: new FormControl(null, Validators.required), 
			userCurso: new FormControl(null, Validators.required),
			userNumero: new FormControl(null, Validators.required),
			userNif: new FormControl(null, Validators.required), 
			email: new FormControl(null, Validators.required),
			password: new FormControl(null, Validators.required) 
		}) 
	}

	onSubmit() { 
		console.log("Form",this.myForm);
		const user = new User(
			this.myForm.value.email,
			this.myForm.value.password, 
			this.myForm.value.fullName, 
			this.myForm.value.userCurso,
			this.myForm.value.userNumero,
			this.myForm.value.userNif,
			0,
			0,
			0,
			0,
			0
		);
		console.log(user); 
		this.authService.signup(user).subscribe(data => console.log(data), error => console.log(error));
		this.myForm.reset();
	}
	 
}